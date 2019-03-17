import actionTypes from '../actionTypes';

export default function movie(state = {}, action) {
  const {type, payload} = action;

    switch (type) {
      case actionTypes.GET_MOVIES_LIST_SUCCES:
        const newState = {
          movieList: payload 
        }; 
        return newState;
      default:
        return state
    }
};
