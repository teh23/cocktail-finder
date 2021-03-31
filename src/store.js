import filtersReducer from './reducers/filtersReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
const reducers = combineReducers({
    filters: filtersReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
