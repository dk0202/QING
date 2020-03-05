from sympy import Symbol, Product, Expr, symbols, sympify, var,expand, cse, separatevars, solveset
from sympy import *
import itertools
import numpy as np
from sympy.simplify.radsimp import collect_const, collect
from sympy import poly
import re


class QING_GENERATOR(object):

    def __init__(self, data):

        # self.isInequality = data['inequality']
        self.isAutogen = data['autogen_terms']
        self.autogenDegree = data['autoDegree']
        self.userTerms = data['userTerms']
        self.nLoops = data['n_loops']
        self.initialAssignments = data['initialAssignments']
        self.verificationConditions = data['verificationConditions']
        # self.functionArgs = self.init_args(data['function_args'])
        self.variables = self.init_variables(data['variables'])
        self.terms = self.init_terms()
        self.coefficients = self.init_coefficients()
        self.templates = self.init_templates()

        self.constraints = []
        self.solved_constraints = None
        self.simplified_templates = []
        self.generated_invariants = []

        self.generate_initial_constraints()
        self.generate_vc_constraints()
        self.generate_solved_constraints()

        self.generate_simplified_template()
        self.generate_invariants()

    def init_variables(self, variables):
        return [sympify(v) for v in variables]

    def init_terms(self):
        if self.userTerms is not None:
            print(self.userTerms)
            return [sympify(t) for t in self.userTerms + ['1']]
        elif self.autogenDegree is not None:
            return [1] + list(map(lambda x: np.product(x), list(itertools.chain(
                *[itertools.combinations_with_replacement(self.variables, i) for i in
                  range(1, self.autogenDegree + 1)]))))

    def init_coefficients(self):
        return symbols(["c_%s" % (i) for i in range(len(self.terms) * self.nLoops)])

    def init_args(self, args):
        return [sympify(a) for a in args]

    def init_templates(self):
        templates = []
        for i in range(self.nLoops):
            T = np.sum([x * y for x, y in
                        zip(self.terms, self.coefficients[i * len(self.terms):i * len(self.terms) + len(self.terms)])])
            templates.append(T)
        return templates

    ##########################################################################################

    def apply_substitutions(self, expr, substitutions):
        new_expr = expr.subs({sympify(s[0]): sympify(s[1]) for s in substitutions}, simultaneous=True)
        return self.full_expand(new_expr)

    def full_expand(self, expr):
        expr = powdenest(expr, force=True)
        expr = expand_log(expr, force=True)
        expr = expand_power_base(expr, force=True)
        expr = expand_power_exp(expr)
        expr = expand(expr)
        return expr

    def get_constant_terms(self, expr):
        monomials = expr.as_coeff_add()[1]
        variables = [m for m in monomials if not any([s in self.variables for s in m.free_symbols])]
        return sum(variables)

    ##########################################################################################

    def solve_constraints(self, VC):
        coeff_dict = {t: None for t in self.terms}
        for t in self.terms:
            coeff_dict[t] = VC.coeff(t)
        coeff_dict[1] = self.get_constant_terms(VC)
        coeff_constraints = list(coeff_dict.values())
        return [c for c in coeff_constraints if c != 0]

    def generate_initial_constraints(self):

        subs = [(x['var'], x['assignment']) for x in self.initialAssignments]
        VC0 = self.apply_substitutions(self.templates[0], subs)
        constraints = self.solve_constraints(VC0)
        self.constraints.extend(constraints)
        newInits = {"substitutions": self.initialAssignments, "constraints": constraints}
        self.initialAssignments = newInits

    def generate_vc_constraints(self):
        for vc in self.verificationConditions:
            T = self.templates[vc['left']['loopIndex'] - 1]
            T_implied = self.templates[vc['right']['loopIndex'] - 1]
            subs = [(x['var'], x['assignment']) for x in vc['right']['substitutions']]
            condition_0_match = re.match('(\w*)==0', vc['left']['condition'])
            if condition_0_match:
                var = condition_0_match.group(1)
                T = T.subs({sympify(var): 0})
            T_implied_subs = self.apply_substitutions(T_implied, subs)
            VC = self.full_expand(T_implied_subs - T)
            constraints = self.solve_constraints(VC)
            self.constraints.extend(constraints)
            vc["constraints"] = constraints

    def generate_solved_constraints(self):
        self.solved_constraints = solve(self.constraints, self.coefficients)

    def generate_simplified_template(self):
        for t in self.templates:
            self.simplified_templates.append(t.subs(self.solved_constraints, simultaneous=True))

    def generate_invariants(self):
        invariants = []
        symbols = [item for sublist in [x.free_symbols for x in self.simplified_templates] for item in sublist]
        free_coeffs = [s for s in symbols if s in self.coefficients]
        free_coeffs = list(set(free_coeffs))
        for c in free_coeffs:
            subs = {f: 1 if c == f else 0 for f in free_coeffs}
            invariants.append([t.subs(subs, simultaneous=True) for t in self.simplified_templates])
            self.generated_invariants.extend([[t.subs(subs, simultaneous=True) for t in self.simplified_templates]])
        return invariants

    ##########################################################################################

    def get_response(self):
        original_templates = []
        for t in self.templates:
            original_templates.append(latex(t))

        for v in self.verificationConditions:
            constraints = v['constraints']
            latex_repr = []
            for c in constraints:
                latex_repr.append(latex(c))
            v['constraints'] = latex_repr
        verification_conditions = [v for v in self.verificationConditions]

        templates = []
        for t in self.templates:
            templates.append(latex(t))

        invariants = []
        for t in self.generated_invariants:
            invariants.append(latex(t))

        n_invariants = len(self.generated_invariants)
        solved_constraints = []
        for sc in self.solved_constraints:
            str_rep = latex(sc) + '=' + latex(self.solved_constraints[sc])
            solved_constraints.append(str_rep)

        data = {
            "initial_assignments": self.initialAssignments,
            "verification_conditions": verification_conditions,
            "original_templates": original_templates,
            "reduced_templates": templates,
            "invariants": invariants,
            "n_invariants": n_invariants,
            "constraint_set": solved_constraints
        }

        return data
