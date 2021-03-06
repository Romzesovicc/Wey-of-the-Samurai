import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'ea0ef02b-032c-4dcc-80c6-e02da584da42'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)

    },
    follow(userId) {
      return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
       return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method, please profileAPI object');
        return  profileAPI.getProfile(userId)
    }


};

export const profileAPI = {
    getProfile(userId){
        return  instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return  instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return  instance.put(`profile/status`, {status:status})
    }
};

export const authAPI = {
    getAuthMe(){
        return instance.get(`auth/me`)
    }
};