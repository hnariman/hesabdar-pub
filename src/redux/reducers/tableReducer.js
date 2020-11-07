const initialState = { showUserModal: false };

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, showUserModal: !state.showUserModal };
    default:
      return state;
  }
};

export default tableReducer;
