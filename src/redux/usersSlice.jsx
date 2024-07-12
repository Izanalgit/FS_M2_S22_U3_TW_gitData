import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:{
        name:"",
        userName:"",
        followers:"",
        repos:[],
        image:""
    }
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUser: (state, action) => {
            const newUser = action.payload;

            state.user.name = newUser.login,
            state.user.userName = newUser.name,
            state.user.followers = newUser.followers,
            state.user.image = newUser.avatar_url

        },
        setRepos: (state, action) => {
            const repos = action.payload;

            state.user.repos = repos.map((repo)=>repo.name)
        },
    },
});

export const { getUser, setRepos } = usersSlice.actions;
export default usersSlice.reducer;