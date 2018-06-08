import { combineReducers } from 'redux'
import fetching from './fetching'
import slider from './slider'
 
export default combineReducers({
  fetching,
  slider
})