import actionTypes from '../actionTypes';

export default function movie(state = {}, action) {
  const {type, payload} = action;
    let newState;
    switch (type) {
      case actionTypes.GET_MOVIES_LIST_SUCCES:
        newState = {
          movieList: payload 
        }; 
        break;
      case actionTypes.GET_MORE_MOVIES_SUCCES:
        newState = {
          movieList: state.movieList.concat(payload) 
        };
        break;
      case actionTypes.SET_NO_MORE_DATA:
        newState = {
          ...state,
          noDataFound: true
        };
        break;
      case actionTypes.SET_NO_DATA:
        newState = {
          noDataFound: true
        };
        break;
      default:
        newState = state;
        break;
    }
    return newState;
};
