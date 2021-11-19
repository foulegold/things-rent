export const SET_LOADING_STATUS = "SET_LOADING_STATUS"

export const setLoadingStatus = (bool) => ({
  type: SET_LOADING_STATUS,
  payload: bool
})


export const setLoading = (bool) => (dispatch) => {
  dispatch(setLoadingStatus(bool))
}