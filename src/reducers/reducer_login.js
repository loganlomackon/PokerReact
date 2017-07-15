import { LOGIN_REQUEST } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case 'POST_LOGIN':
      //Add into list, return new array using concat
      return action.payload.data.login_url;
      //return [ action.payload.data, ...state ];
  }
  return state;
}
