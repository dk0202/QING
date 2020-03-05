from sympy import Symbol, Product, Expr, symbols, sympify, var,expand, cse, separatevars, solveset
from sympy import *
import itertools
import numpy as np
from sympy.simplify.radsimp import collect_const, collect
from sympy import poly


def apply_substitutions(T, substitutions):
    new_T = T.subs({sympify(s[0]): sympify(s[1]) for s in substitutions}, simultaneous=True)
    return expand(new_T)


class QINGgenerator(object):

    def __init__(self, settings):

        self.n_loops = settings["n_loops"]

        self.autoGenerateTerms = settings["autogen_terms"]
        self.autoDegree = settings["autoDegree"]
        self.useInequalities = settings["inequality"]
        self.verificationConditions = settings["verificationConditions"]
        self.initialAssignments = settings["initialAssignments"]

        self.variables = self.init_variables(settings["variables"])
        self.terms = self.init_terms()
        self.coefficients = self.init_coefficients()
        self.templates = []

        self.trace = []

        self.constraints = []
        self.coeffSolution = None
        self.invariants = []

    def init_variables(self, variables):
        return [sympify(x) for x in variables]

    def init_terms(self, terms=None):
        if terms is not None:
            return [sympify(t) for t in terms + ['1']]
        elif self.autoDegree is not None:
            return [1] + list(map(lambda x: np.product(x), list(itertools.chain(
                *[itertools.combinations_with_replacement(self.variables, i) for i in range(1, self.autoDegree + 1)]))))

    def init_coefficients(self):
        return symbols(["c_%s" % (i) for i in range(len(self.terms) * self.n_loops)])

    def create_templates(self):

        for i in range(self.n_loops):
            T = np.sum([x * y for x, y in
                        zip(self.terms, self.coefficients[i * len(self.terms):i * len(self.terms) + len(self.terms)])])
            self.templates.append(T)

    def compute_initial_constraints(self):

        subs = [(x['var'], x['assignment']) for x in self.initialAssignments]
        solved_constraints = apply_substitutions(self.templates[0], subs)
        # addInitAssign constraints to return in js
        self.constraints.append([solved_constraints])

    def compute_vc_constraints(self):

        for vc in self.verificationConditions:
            T = self.templates[vc['left']['loopIndex'] - 1]
            T_implied = self.templates[vc['right']['loopIndex'] - 1]
            subs = [(x['var'], x['assignment']) for x in vc['right']['substitutions']]
            diff = apply_substitutions(T_implied, subs) - T
            P = poly(diff, self.variables)
            solved_constraints = [P.coeff_monomial(t) for t in self.terms]
            self.constraints.append(solved_constraints)
            vc["constraints"] = [x for x in solved_constraints if x != 0]

    def solve_coeffs(self):

        all_constraints = list(itertools.chain(*self.constraints))
        self.coeffSolution = solve(all_constraints, self.coefficients)

        simplified_templates = []
        for t in self.templates:
            simplified_templates.append(t.subs(self.coeffSolution))
        self.templates = simplified_templates

    def generate_invariants(self):
        free_coeffs = []
        for t in self.templates:
            for c in [f for f in t.free_symbols if f in self.coefficients]:
                free_coeffs.append(c)

        free_coeffs = list(set(free_coeffs))
        print(free_coeffs)
        generated_invariants = []
        for c in free_coeffs:
            subs = {f: 1 if c == f else 0 for f in free_coeffs}
            generated_invariants.append([t.subs(subs, simultaneous=True) for t in self.templates])

        self.invariants = generated_invariants



def GetInvariants(data):
    q = QINGgenerator(data)
    q.create_templates()
    q.compute_initial_constraints()
    q.compute_vc_constraints()
    q.solve_coeffs()
    q.generate_invariants()
    for v in q.verificationConditions:
        constraints = v['constraints']
        latex_repr = []
        for c in constraints:
            latex_repr.append(latex(c))
        v['constraints'] = latex_repr
    verification_conditions = [v for v in q.verificationConditions]
    templates = []
    for t in q.templates:
        templates.append(latex(t))

    invariants = []
    for t in q.invariants:
        invariants.append(latex(t))

    n_invariants=len( q.invariants)

    data = {
        "verification_conditions": verification_conditions,
        "reduced_templates": templates,
        "invariants": invariants,
        "n_invariants": n_invariants
    }

    return data