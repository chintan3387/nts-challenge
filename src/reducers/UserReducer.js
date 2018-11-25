import { FETCH_USERS, FETCH_USER_DETAILS } from '../actions/types';
import _ from 'lodash';

export default function (state = [], action) {
  console.log(action.type);
  switch(action.type) {
  case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'username');
  case FETCH_USER_DETAILS:
      return state;

    default:
      return state;
  }
}
