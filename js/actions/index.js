import 'isomorphic-fetch';

export const ADD_REPO = 'ADD_REPO';
export const addRepo = repository => {
  return {
    type: ADD_REPO,
    repository
  };
};

export const RATE_REPO = 'RATE_REPO';
export const rateRepo = (repository, rating) => {
  return {
    type: RATE_REPO,
    repository,
    rating
  };
};

export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (repository, description) => {
  console.log(`Description: ${description}`);
  return {
    type: FETCH_DESCRIPTION_SUCCESS,
    repository,
    description
  };
};

export const FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR';
export const fetchDescriptionError = (repository, error) => {
  return {
    type: FETCH_DESCRIPTION_ERROR,
    repository,
    error
  };
};


// NOTE: ES5 version of below function
// function fetchDescription(repository) {
//   return function(dispatch) {
//     return fetch().then()
//   } 
// }

export const fetchDescription = repository => dispatch => {
  const url = `https://api.github.com/repos/${repository}`;
  return fetch(url).then( response => {
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    console.log(`Response: ${response}`);
    return response;
  })
  .then( response => response.json())
  .then( data =>
    dispatch(fetchDescriptionSuccess(repository, data.description))
  )
  .catch( error =>
    dispatch(fetchDescriptionError(repository, error))
  );
};
