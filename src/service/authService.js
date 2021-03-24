import axios from '../axios/axiosConfig';

const AuthService = {

    // Mozebi ne treba return
    userLogIn: () => {
       return axios.get('/auth/google')
    }
}

export default AuthService;