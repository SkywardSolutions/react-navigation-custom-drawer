import MainStack from '../navigator/MainStack';

const initialState = MainStack.router.getStateForAction(MainStack.router.getActionForPathAndParams('Home'));


export const navReducer = (state = initialState, action) => {
  const nextState = MainStack.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
  // return state;
};
