import React from 'react';

import { bindActionCreators, connect } from 'redux';
import { Provider } from 'react-redux'
import fetchUser from './apiCalls';
import {getProductsError, getProducts, getProductsPending} from './reducers/reducers';

import configureStore from './store/store';

const store = configureStore()

function App(props, userName = "Chrisangoro") {

  fetchUser(userName);

  return (
    <div className="App">
      <Provider store={store}>
        <form>
          <select>
            { console.log(store.getState()) }
            <option value="steam">Steam</option>
            <option value="ps4">PlayStation</option>
            <option value="x1">Xbox</option>
          </select>
          <input type="text" name="firstname"/>
        </form>
      </Provider>
    </div>
  );
}

export default App;
