import { ActionTypes } from "../constants/action-types";
export const getMovies = (movies) => {
    return {
        type: ActionTypes.GET_MOVIES,
        payload: movies
    }
}