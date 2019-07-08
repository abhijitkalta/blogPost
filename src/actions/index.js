import { FETCH_POSTS, FETCH_USER } from './types';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

import _ from 'lodash';

export const fetchPosts =  () => {

  return async function(dispatch, getState) {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch( {
      type: FETCH_POSTS,
      payload: {
        data: response.data,
      }
    });
  }

};

export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(
  async function(id, dispatch){
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
      type: FETCH_USER,
      payload: {
        data: response.data
      }
    })
  }
)
