import actionTypes from '../actionTypes';

export default function loader(state = {}, action) {
  const {type, payload} = action;

    switch (type) {
      case actionTypes.LOADER_UP:
        const newState = {
          count: state.count++ 
        }; 
        return newState;
      case actionTypes.LOADER_DOWN:
        const newState = {
          count: state.count-- 
        }; 
        return newState;
      default:
        return state
    }
};
