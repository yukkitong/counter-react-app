
export default (store) => (next) => (action) => {

  next(action);

  const currentState = store.getState();
  next({type: 'COLOR', red: currentState.count >= 10 });
};