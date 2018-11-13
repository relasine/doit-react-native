const doItReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DO_IT":
      const newDoIt = {
        title: action.newDoIt,
        completed: false,
        id: Date.now()
      };
      return [...state, newDoIt];
    case "REMOVE_DO_IT":
      return state.filter(doIt => {
        return doIt.id !== action.id;
      });
    case "TOGGLE_DO_IT":
      const newState = state.map(doit => {
        console.log(action);
        if (action.id !== doit.id) {
          return doit;
        } else {
          console.log("change");
          return Object.assign({}, doit, { completed: !doit.completed });
        }
      });
      return newState;
    default:
      return state;
  }
};

export default doItReducer;
