const repoReducer = (state, action) => {
    switch (action.type) {
      case 'setMessage': {
        state.messages[action.payload.index]=action.payload.data;
        return {...state};
      }

      case 'setAllMessage' : {
        return {...state, messages: action.payload};
      }
      default:
        return state;
    }
  };
  export default repoReducer;