import axios from 'axios';

const BACKEND_LOGIN_URL = 'https://backend.pokerhousecn.com/api/client_auth';
export const POST_LOGIN = 'POST_LOGIN';

export function postLogin(loginCode) {

  const request = axios.post(BACKEND_LOGIN_URL, {
   auth_type: 'code',
    code: loginCode
  });

  return {
    type: POST_LOGIN,
    payload: request
  };
}
