import * as actions from '../actions/index';

// set initial state if nothing existings
export const initialRepositoryState = [];

export const repositoryReducer = (state=initialRepositoryState, action) => {
  // check action type to proceed, create if action is ADD_REPO
  if (action.type === actions.ADD_REPO) {
    return [...state, {
      name: action.repository,
      rating: null
    }];
  }
  // if action is RATE_REPO, then find repository matching and return new state
  else if (action.type === actions.RATE_REPO) {
    const index = state.findIndex(repository => {
      return repository.name === action.repository;
    });

    // if can't find repository in state
    if (index === -1) {
      throw new Error('Could not find repository');
    }

    // build the new state array to return
    const before = state.slice(0, index);
    const after = state.slice(index + 1);
    const newRepository = Object.assign({}, state[index], {rating: action.rating});
    return [...before, newRepository, ...after];
  }
  return state;
};
