import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi', likeCount: 0},
        {id: 2, message: 'bi', likeCount: 1},
    ],
    newPostText: 'tra tra tra',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 2
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
};
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {

        dispatch(setStatus(response.data));
    })
};

export let updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        console.log(response)
        if (response.data.resultCode === 0) {

            dispatch(setStatus(status));

        }
    })
};

export default profileReducer;