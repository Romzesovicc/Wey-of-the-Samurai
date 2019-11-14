import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer  from "./Users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage: usersReducer,
    auth: authReducer,

});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware) );

window.store = store;

export default store;