import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './reducers'
import {mount} from 'enzyme';

const store = createStore(appReducer);

describe('<App />', ()=>{
  it('renders without crashing', ()=>{
    const app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})
