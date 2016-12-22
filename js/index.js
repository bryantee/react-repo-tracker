// require('babel-polyfill');
import * as actions from './actions/index'
import { initialRepositoryState, repositoryReducer } from './reducers/index'
import store from './store'

// console.log(repositoryReducer([ { name: 'TEST REPO', rating: null }], actions.rateRepo('TEST REPO', 5)));
store.dispatch(actions.addRepo('joe'));
console.log(store.getState());
