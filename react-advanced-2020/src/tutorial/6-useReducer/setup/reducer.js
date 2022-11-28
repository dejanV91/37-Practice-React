const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
      color: "#dcf4da",
    };
  }
  if (action.type === "EMPTY") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter name",
      color: "#f8afb9",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((item) => item.id !== action.payload);
    if (newPeople.length === 0) {
      return { people: [], isModalOpen: true, modalContent: "empty list" };
    }
    return { ...state, people: newPeople };
  }
  if (action.type === "CLEAR_ALL") {
    return { people: [], isModalOpen: true, modalContent: "empty list" };
  }
};

export default reducer;
