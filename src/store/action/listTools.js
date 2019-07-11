export const listToolsSuccess = data => ({
  type: "ADD_TOOLS_SUCCESS",
  payload: { data }
});

export const listToolsFailure = err => ({
  type: "ADD_TOOLS_FAILURE",
  payload: { err }
});
