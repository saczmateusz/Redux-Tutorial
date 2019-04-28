import { AXIOS_POST, NEW_POST } from "./actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AXIOS_POST:
      console.log("oslo here");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
    default:
      return state;
  }
}
