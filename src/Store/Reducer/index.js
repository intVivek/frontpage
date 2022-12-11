const repoReducer = (state, action) => {
    switch (action.type) {
      case 'setMessage': {
        state.messages[action.payload.index].message=action.payload.chat;
        state.messages[action.payload.index].date=action.payload.date;
        console.log(state, state.messages[action.payload.index]);
        return {...state};
      }
      case 'setAllMessage' : {
        return {...state, messages: action.payload};
      }
      case 'setChat': {
        state.chats.push(action.payload);
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