
import {combineReducers} from 'redux';
import repositoriesReducer from './repositoriesReducer';
import testReducer from './testReducer'

const reducers =  combineReducers({
   repositories:repositoriesReducer,
   test:testReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;