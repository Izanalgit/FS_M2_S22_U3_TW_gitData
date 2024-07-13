import axios from 'axios';

export const fetchRepos = async (userRepos) => {

    try {
        const response = await axios.get(userRepos);

        const result = response.data;

        return result;

    } catch (error) {
        console.error(error);
    }
}

