export const ADD_REPO = 'ADD_REPO';
export const addRepo = repository => ({
  type: ADD_REPO,
  repository
});

export const RATE_REPO = 'RATE_REPO';
export const rateRepo = (repository, rating) => ({
  type: RATE_REPO,
  repository,
  rating
});
