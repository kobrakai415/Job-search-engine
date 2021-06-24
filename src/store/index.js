import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { favouritesReducer, jobsReducer} from "../reducers"
import thunk from "redux-thunk"

export const initialState = {
    favouriteJobs: {
        favourites: [],
        error: false,
        loading: false 
    },
    jobs: {
        vacancies: [],
        error: false,
        loading: false,
        debouncedQuery: "",
        
    }
}

const mainReducer = combineReducers(
    {
        favouriteJobs: favouritesReducer,
        jobs: jobsReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => createStore(mainReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore