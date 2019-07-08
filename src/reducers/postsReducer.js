import { FETCH_POSTS } from '../actions/types';

const INITIAL_STATE = [];

 const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data;
      break;
    default:
      return state
  }
}

export default postsReducer;
