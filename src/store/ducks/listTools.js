export const Types = {
  GET_REQUEST: "tools/GET_REQUEST",
  GET_SUCCESS: "tools/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: []
};

/**
 *
 * Reducers
 */

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state };
    case Types.GET_SUCCESS:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}

/**
 *
 * Actions
 */

export const Creators = {
  getToolsRequest: () => ({ type: Types.GET_REQUEST }),
  getToolsSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } })
};
