import { RECEIVE_GENRES, RECEIVE_GENRE } from "../actions/genre_actions";

const GenresReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GENRES:
      // debugger
      nextState = action.genres;
      return nextState;
      case RECEIVE_GENRE:
        // debugger
        nextState[action.payload.genre] = action.payload.genre;
        return nextState;
    default:
      return state;
  }
};

export default GenresReducer;
