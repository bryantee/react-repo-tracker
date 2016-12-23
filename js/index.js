// require('babel-polyfill');
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// Components
import RepositoryList from './Components/repository-list'

import * as actions from './actions/index'
import { initialRepositoryState, repositoryReducer } from './reducers/index'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <RepositoryList />
    </Provider>,
    document.getElementById('app')
  )
});
