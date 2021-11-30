export const SET_WARNING_TEXT = "SET_WARNING_TEXT"


export const setWarningText = (text) => ({
  type: SET_WARNING_TEXT,
  payload: text
})


export const setWarning = (text) => (dispatch) => {
  dispatch(setWarningText(text))
}