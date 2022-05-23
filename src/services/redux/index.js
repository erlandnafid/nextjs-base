import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from '@services/redux/reducer'

const initStore = createStore(reducers, applyMiddleware(thunk))

export default initStore
