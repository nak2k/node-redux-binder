const actions = Object.create(null);

export default actions;

export const bindActionCreators = (actionCreators, dispatch) =>
  Object.keys(actionCreators).forEach(key => {
    if (key === 'default') {
      return;
    }

    const actionCreator = actionCreators[key];

    if (typeof(actionCreator) === 'function') {
      actions[key] = (...args) => dispatch(actionCreator(...args));
    }
  });
