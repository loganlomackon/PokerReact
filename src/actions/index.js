import axios from 'axios';

//const BACKEND_LOGIN_URL = 'https://backend.pokerhousecn.com/api/client_auth';
const BACKEND_LOGIN_URL = 'http://localhost:8080/api/client_auth';
export const POST_LOGIN = 'POST_LOGIN';

export function postLogin(memberId, callback) {
  const request = axios.post(BACKEND_LOGIN_URL, {
    auth_type: 'quick',
    member_id: memberId
  }).then(() => callback());

  return {
    type: POST_LOGIN,
    payload: request
  };
}
