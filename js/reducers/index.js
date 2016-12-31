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
  // now for ajax requests instead of manual entry
  else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
    console.log('State', state);
    console.log('Action repo', action.repository);
    // find the index of the matching repository
    const index = state.findIndex(repository =>
      repository.name === action.repository
    );

    if (index === -1) {
      throw new Error('Could not find repository');
    }

    const before = state.slice(0, index);
    const after = state.slice(index + 1);
    const newRepository = Object.assign({}, state[index], {
      description: action.description
    });
    return [...before, newRepository, ...after];
  }
  else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
    console.log(`Error: ${action.error}`);
    // again, find the index
    const index = state.findIndex(repository =>
      repository.name === action.repository
    );

    // if repo not found in findIndex loookup:
    if (index === -1) {
      throw new Error('Could not find repository');
    }

    const before = state.slice(0, index);
    const after = state.slice(index + 1);
    const newRepository = Object.assign({}, state[index], {
      description: 'N/A'
    });
    return [...before, newRepository, ...after];
  }

  // if no action to change state
  return state;
};
