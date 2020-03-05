import {FunctionParser} from '../parser/FunctionParser'
export const PARSE_FUNCTION = 'PARSE_FUNCTION'
export const SET_FUNCTION_BODY = 'SET_FUNCTION_BODY'
export const SET_INITIAL_ASSIGNMENTS = 'SET_INITIAL_ASSIGNMENTS'
export const SET_VERIFICATION_CONDITIONS = 'SET_VERIFICATION_CONDITIONS'

const initialState = {
  count: 0,
  isParsed: false,
  functionBody: null,
  variables: [],
  initialAssignments: [],
  verificationConditions: [],
  n_loops: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PARSE_FUNCTION:
      return {
        ...state,
        isParsed: true,
        functionBody: action.functionBody,
        verificationConditions: action.verificationConditions,
        variables: action.variables,
        n_loops: action.n_loops,
        initialAssignments: action.initialAssignments
      }
    default:
      return state
  }
}

export const parse_function = (functionBody) => {

  var parser = new FunctionParser(functionBody);
  parser.parseFunction();
  var verificationConditions = parser.VCs;
  var variables = parser.variables;
  var n_loops = parser.n_loops;
  var initialAssignments = parser.initialAssignments;
  return dispatch => {
    dispatch({
      type: PARSE_FUNCTION, functionBody, verificationConditions, variables, n_loops,initialAssignments
    })

  }
}

