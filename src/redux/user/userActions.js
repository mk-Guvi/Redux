import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS
} from "./userTypes";
export const fetchUsersRequest = () => {
  return {
    Type: FETCH_USERS_REQUEST
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    Type: FETCH_USERS_SUCCESS,
    Payload: users
  };
};

export const fetchUsersFailure = (error) => {
  return {
    Type: FETCH_USERS_FAILURE,
    Payload: error
  };
};
