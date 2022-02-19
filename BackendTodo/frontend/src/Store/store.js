import {createStore,combineReducers,applyMiddleware} from "redux";
import {reducer as Todoreducer} from './reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todos:Todoreducer,
})

export const store =createStore(
    rootReducer,
    applyMiddleware(thunk)
    // compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)