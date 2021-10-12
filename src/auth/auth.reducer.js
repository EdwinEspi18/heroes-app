import { types } from '../types/types';

/* const state = {
  name: 'Edwin',
  logged: true
} */

export const auth = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return { ...action.payload, logged: true };
    case types.logout:
      return { logged: false };
    default:
      return state;
  }
};

export default auth;
