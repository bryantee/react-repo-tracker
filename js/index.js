// require('babel-polyfill');
import * as actions from './actions/index'
import { initialRepositoryState, repositoryReducer } from './reducers/index'

console.log(repositoryReducer([ { name: 'TEST REPO', rating: null }], actions.rateRepo('TEST REPO', 5)));
