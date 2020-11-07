// reducers/auth

const initialState = { sideBar: true };

const menu = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, sideBar: !state.sideBar };
    default:
      return state;
  }
};

export default menu;
