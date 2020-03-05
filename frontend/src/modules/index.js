import { combineReducers } from 'redux'
import settings from './settings'
import counter from './counter'
import funct from './funct'
import submit from './submit'

export default combineReducers({
  counter,
  settings,
  funct,
  submit
})
