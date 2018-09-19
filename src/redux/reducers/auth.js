import { USER_LOGIN, USER_LOGOUT } from '../actionTypes/auth';

const initialState = {
  auth: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      const { auth, user } = action.payload;
      return {
        ...state,
        auth,
        user
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        auth: false,
        user: {}
      };
    }
    default:
      return state;
  }
};
