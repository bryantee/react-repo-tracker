// require('babel-polyfill');
import * as actions from './actions/index'
import { initialRepositoryState, repositoryReducer } from './reducers/index'

console.log(repositoryReducer([], actions.addRepo('TEST REPO')));
