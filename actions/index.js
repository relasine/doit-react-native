export const addDoIt = newDoIt => {
  return {
    type: "ADD_DO_IT",
    newDoIt
  };
};

export const removeDoIt = id => {
  return {
    type: "REMOVE_DO_IT",
    id
  };
};

export const toggleDoIt = id => {
  return {
    type: "TOGGLE_DO_IT",
    id
  };
};
