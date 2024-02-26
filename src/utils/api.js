import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const Tmdb_TOKEN = process.env.TMDB_TOKEN;;

const headers = {
    Authorization: "bearer " + Tmdb_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
