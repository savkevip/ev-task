import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILED
} from "../../constants/actionTypes";

export const getDataStart = () => ({ type: GET_DATA_START });

export const getDataSuccess = data => ({
    type: GET_DATA_SUCCESS,
    data
});

export const getDataFailed = () => ({
    type: GET_DATA_FAILED
});

export const addStart = data => ({
  type: ADD_START,
  data
});

export const addSuccess = () => ({ type: ADD_SUCCESS });

export const addFailed = error => ({
  type: ADD_FAILED,
  error
});
