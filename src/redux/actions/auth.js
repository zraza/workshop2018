import { USER_LOGIN, USER_LOGOUT } from '../actionTypes/auth';

export const userLogin = ({ auth, user }) => ({
  type: USER_LOGIN,
  payload: { auth, user }
});

export const userLogout = () => ({
  type: USER_LOGOUT
});
