import axios from 'axios';
import { FETCH_USERS, FETCH_USER_DETAILS, API_URL } from './types';

export function fetchUsers() {
  const request = axios.get(`${API_URL}nts-userlist`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function fetchUser(username) {
  return {
    type: FETCH_USER_DETAILS,
    payload: username
  }
}
