const initialState = {
  messages: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { type: 'text', content: action.payload }],
      };

    case "ADD_IMAGE_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { type: 'image', content: action.payload }],
      };

    default:
      return state;
  }
};

export default messageReducer;
