import axios from '../axios/axiosConfig';

const UsersAndFestivalsService = {

    searchFestivals: (country, genre) => {
        return axios.get(`/user/searchFestivals/${country}/${genre}`);
    },

    addFestivalToUser: (festival, userId) => {
        return axios.patch(`/user/addFestival/${userId}`, festival);
    },

    removeFestivalFromUser: (festivalId, userId) => {
        return axios.patch(`/users/removeFestival/${userId}`, {
            festivalId
        });
    }
};


export default UsersAndFestivalsService;