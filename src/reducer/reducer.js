import { ACTION_INC, ACTION_DEC } from '../action/counterAction';

// reducer
export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ACTION_INC:
      return { count: state.count + action.unit };
    case ACTION_DEC:
      return { count: state.count - action.unit };
    case 'COLOR':
      return { ...state, red: !!action.red };
    default:
      return state;
  }
};