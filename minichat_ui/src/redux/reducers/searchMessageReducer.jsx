const initialState = {
    SearchMessage: "",
  };
  
  const searchMessageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SEARCH_MESSAGE":
        return {
          ...state,
          SearchMessage: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default searchMessageReducer;
  