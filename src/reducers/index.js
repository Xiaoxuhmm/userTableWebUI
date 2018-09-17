import {combineReducers} from 'redux';

const defaultReducer = (state={}, action) => {
  return state;
}

const appReducer = combineReducers({
  defaultReducer
});

export default appReducer;
