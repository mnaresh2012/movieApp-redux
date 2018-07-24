
import completeSearch from '../actions/completeSearchAction';

module.exports = (currentState, action) => {
    switch(action.type) {
        case "SEARCH_COMPLETE":
            return completeSearch(currentState);
        case "ADD_TO_FAVOURITE":
            return addToFavourite();
        case "REMOVE_FROM_LIST":
            return removeMovieFromCollection();
        default:
            return currentState;
    }
}