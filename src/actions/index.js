import axios from 'axios';

const ROOT_URL = `http://localhost:8090/api/client_auth`;
export const POST_LOGIN = 'POST_LOGIN';

export function postLogin(loginCode) {
  const url = ROOT_URL;
  //var request = axios.get(url);

  const request = axios.post(url, {
   auth_type: 'code',
    code: loginCode
  });

  return {
    type: POST_LOGIN,
    payload: request
  };
}
