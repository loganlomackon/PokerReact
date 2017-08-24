import { POST_LOGIN } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case 'POST_LOGIN':
      return action.payload.data.login_url;
      //return [ action.payload.data, ...state ];
    default:
      return state;
  }
}
