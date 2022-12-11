const repoReducer = (state, action) => {
    switch (action.type) {
      case 'setMessage': {
        state.messages[action.payload.index]=action.payload.data;
        return {...state};
      }
      case 'setAllMessage' : {
        return {...state, messages: action.payload};
      }
      case 'setChat': {
        console.log(state.chats);
        state.chats.push(action.payload);
        console.log(state.chats);
        return {...state};
      }
      case 'setAllChat' : {
        return {...state, chats: action.payload};
      }
      case 'selectChat' : {
        return {...state, selectedChat: action.payload};
      }
      default:
        return state;
    }
  };
  export default repoReducer;