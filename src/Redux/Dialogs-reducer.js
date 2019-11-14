const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'sas'}
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'bi'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
           return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };

        default :
            return state
    }

};
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;