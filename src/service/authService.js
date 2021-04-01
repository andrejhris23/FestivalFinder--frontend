import axios from '../axios/axiosConfig';
import { SERVER_URL } from '../shared/constants';

const AuthService = {

    // Mozebi ne treba return
    fetchUser: async () => {
       const res = await axios.get(`${SERVER_URL}auth/login/success`);
       let user;
       if(res.status === 200) {
             user = res.data.user;
             return user;
       }
    }
}

export default AuthService; 