import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    });
  }
};

// Delete Log From Server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    });
  }
};

// Add new Log
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-TYpe": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    });
  }
};

// Set loading a true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
