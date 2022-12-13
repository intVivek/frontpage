const repoReducer = (state, action) => {
    switch (action.type) {
      case 'setMessage': {
        state.messages[action.payload.index].message=action.payload.chat;
        state.messages[action.payload.index].date=action.payload.date;
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
      case 'setUser' : {
        return {...state, user: action.payload};
      }
      case 'setMsgTop' : {
        state.messages.sort((a,b)=>new Date(b.date) - new Date(a.date));
        console.log(state.messages);
        return {...state};
      }
      default:
        return state;
    }
  };
  export default repoReducer;