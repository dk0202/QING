import {FunctionParser} from '../parser/FunctionParser'
export const RESET_SUBMISSION = 'RESET_SUBMISSION';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const SUBMIT_REQUEST_FAILURE = 'SUBMIT_REQUEST_FAILURE';
export const SUBMIT_REQUEST_SUCCESS = 'SUBMIT_REQUEST_SUCCESS';
export const COMPLETE_REQUEST = 'COMPLETE_REQUEST';
const axios = require('axios');

const initialState = {
  isSubmitted: false,
  isCompleted: false,
  result: false

}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_SUBMISSION:
      return {
        ...state,
        isSubmitted: false,
        isCompleted:false
      }
    case SUBMIT_REQUEST:
      return {
        ...state,
        isSubmitted: true,
        isCompleted:false

      }
    case SUBMIT_REQUEST_SUCCESS:
      return {
        ...state,
        isCompleted: true,
        result: action.response
      }
    case SUBMIT_REQUEST_FAILURE:
      return {
        ...state,
        isSubmitted: false,
        isCompleted: false,
        result: false
      }
    default:
      return state
  }
}


export function  submit_request (response)  {
  return dispatch => {
    dispatch({
      type: SUBMIT_REQUEST_SUCCESS, response
    })

  }


  // axios.post('http://localhost:8000/generate/', functionData)
  //   .then(function (response) {
  //
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //
  //     return dispatch => {
  //       dispatch({
  //         type: SUBMIT_REQUEST_FAILURE, error
  //       })
  //
  //     };
  //   });


  // return dispatch => {
  //   dispatch({
  //     type: SUBMIT_REQUEST, response
  //   })
  //
  // }

}

