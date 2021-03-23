import axios from '../axios/axiosConfig';

const UsersAndFestivalsService = {

    searchFestivals: (country, genre) => {
        return axios.get(`/user/searchFestivals/${country}/${genre}`);
    },

    addFestivalToUser: () => {

    },

    removeFestivalFromUser: () => {

    }
};


export default UsersAndFestivalsService;