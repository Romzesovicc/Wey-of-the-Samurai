import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likeCount: 0},
                {id: 2, message: 'bi', likeCount: 1},
            ],
            newPostText: 'tra tra tra'
        },

        dialogsPage: {
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
        },
        sidebar: {}

    },
    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)

            this._callSubscriber(this._state);
        }

};




export default store;