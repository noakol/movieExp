import actionTypes from '../actionTypes';

export default function loader(state = {count: 0}, action) {
  const {type} = action;
    let newState;
    switch (type) {
      case actionTypes.LOADER_UP:
        newState = {
          count: state.count+= 1 
        }; 
        break;
      case actionTypes.LOADER_DOWN:
        newState = {
          count: state.count-= 1
        }; 
        break;
      default:
        newState = state;
        break;
    }
    return newState;
};
