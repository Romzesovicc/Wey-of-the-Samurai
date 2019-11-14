import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

};

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default :
            return state
    }

};


export const setAuthUserData = (id,email,login) => ({type: SET_USER_DATA, data:{id,email,login}});
export const getUserData = () =>(dispatch) => {
    authAPI.getAuthMe().then(response => {

        if (response.data.resultCode === 0) {
            let {id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login));

        }

    }).catch((error) => {
        if (error) {
            console.log(error)
        }

    })
};

export default authReducer;