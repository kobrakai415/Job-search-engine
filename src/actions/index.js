const ApiUrl = process.env.REACT_APP_API_URL

export const addToFavourites = (job) => ({
  type: 'ADD_JOB_TO_FAVOURITES',
  payload: job,
})

export const removeFromFavourites = (job) => ({
  type: 'REMOVE_JOB_FROM_FAVOURITES',
  payload: job,
})

export const getVacancies = (query) => {
  return async (dispatch, getState,) => {
    try {

      if (query) {
        dispatch({
          type: "SET_LOADING",
          payload: true
        })
        const res = await fetch(`${ApiUrl}?search=${query}`)
        const json = await res.json()
        console.log(json)

        dispatch({
          type: "SET_VACANCIES",
          payload: json.jobs
        })
        dispatch({
          type: "SET_LOADING",
          payload: false
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}