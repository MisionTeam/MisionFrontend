/*
* Allow several sub reducers to be combined to return a single immutable object
* @param defaultReducer <function> this reducer recieves the top level state and
*     returns the new top level state before the sub reducers are called
* @param subReducers <object> of <functions> - a map of sub reducers which
*     recieve and return a sub section of the state (analagous to the first
*    argument to redux's own combineReducers)
* @returns a new reducer which combines the default and subReducers
*/
export function mergeSubReducers(defaultReducer, subReducers) {
  return (state, action) => {
    let nextState = state;
    if (defaultReducer) {
      nextState = defaultReducer(state, action);
    }

    Object.keys(subReducers).forEach((key) => {
      if (!nextState.has(key)) {
        throw new Error(`${key} does not exist on the state`);
      }
      nextState = nextState.set(key, subReducers[key](nextState[key], action));
    });

    return nextState;
  };
}
