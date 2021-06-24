import { initialState } from "../store"



export const favouritesReducer = (state = initialState.favouriteJobs, action) => {

    switch (action.type) {
        case "ADD_JOB_TO_FAVOURITES":
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }

        case "REMOVE_JOB_FROM_FAVOURITES":
            const modifiedFavs = [...state.favourites.filter(item => item.id !== action.payload.id)]
            return {
                ...state,
                favourites: modifiedFavs
            }
        default:
            return state

    }
}

export const jobsReducer = (state = initialState.jobs, action) => {

    switch (action.type) {
        case "SET_VACANCIES":
            return {
                ...state,
                vacancies: [ ...action.payload]
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state

    }
}