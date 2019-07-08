import { FETCH_USER } from '../actions/types';

const INITIAL_STATE = [];

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload.data]
      break;
    default:
      return state;
  }
}

export default usersReducer;
