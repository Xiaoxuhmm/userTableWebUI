import React from 'react';
import {mount} from 'enzyme';
import {createStore} from 'redux';
import appReducer from '../reducers';
import UserTableContainer from './userTableContainer';
import PaginationContainer from './paginationContainer';
import {
  fetchData,
  DATA_LOADING
} from '../actions/userTable';
const store = createStore(appReducer);

describe('<UserTableContainer />', () => {
  it('should render with initial state', ()=>{
    const container = mount(<UserTableContainer store={store} />);
  })
})

describe('<PaginationContainer />', () => {
  it('should render with initial state', ()=>{
    const container = mount(<PaginationContainer store={store} />);
  })
})
