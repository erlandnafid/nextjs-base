import { combineReducers } from 'redux'
import global from '@services/redux/reducer/global'

const rootReducer = combineReducers({
  global,
})

export default rootReducer
