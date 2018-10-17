import { setPropValue, setDataValue } from "../../../../utils/utils";

const initState = {
  error: false,
  loading: false,
  data: null
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA_START":
      return setPropValue(state, "loading", true);
    case "GET_DATA_SUCCESS":
      return setDataValue(state, 'data', action.data);
    case "GET_DATA_FAILED":
      return setPropValue(state, "error", true);
    default:
      return state;
  }
};

export default homeReducer;
