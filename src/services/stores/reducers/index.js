import { combineReducers } from 'redux'
import global from '@services/stores/reducers/global'

const rootReducer = combineReducers({
  global,
})

export default rootReducer
