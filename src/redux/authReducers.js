import authOperations from "./authOperations";
import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: {},
      error: null,
      isLoading: false,
      isAuth: false,
      token: null,
    },
    reducers: {},
    extraReducers:{
        // [authOperations.getAllUsers.pending](state,action) {
        //     return { 
        //         ...state,
        //         isLoading:true,
        //         error:null,
        //     }
        // },
        // [authOperations.getAllUsers.fulfilled](state,action) {
        //     return { 
        //         isLoading:false,
        //         error:null,
        //         users: [...action.payload]
        //     }
        // },
        // [authOperations.getAllUsers.rejected](state,action) {
        //     return { 
        //         isLoading:false,
        //         error:action.payload,
        //     }
        // },
        [authOperations.loginThunk.pending](state,action) {
            return { 
                isLoading:true,
                error:null,
                isAuth:false,
            }
        },
        [authOperations.loginThunk.fulfilled](state,action) {
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
            state.isAuth = true;
        },
        [authOperations.loginThunk.rejected](state,action) {
            return { 
                isLoading:true,
                error:action.payload,
                isAuth:false,
            }
        },
        [authOperations.getCurrentUser.pending](state,action) {
            return { 
                isLoading:true,
                error:null,
                isAuth:false,
                token : state.token
            }
        },
        [authOperations.getCurrentUser.fulfilled](state,action) {
                state.user = action.payload;
                state.isAuth = true;
        },
        [authOperations.getCurrentUser.rejected](state,action) {
            return { 
                isLoading:false,
                error:action.payload,
                isAuth:false,
            }
        },
        [authOperations.registerThunk.pending](state,action) {
            state.isLoading = true;
            state.error = null;
            state.isAuth = false;
        },
        [authOperations.registerThunk.fulfilled](state,action) {
            state.currentUser = action.payload.user;
            state.isAuth = false;
            state.isLoading = false;
            state.error = null;
        },
        [authOperations.registerThunk.rejected](state,action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        [authOperations.logOut.pending](state, action) {
            state.isLoading = true;
            state.error = false;
        },
        [authOperations.logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.currentUser = { name: null, email: null };
            state.token = null;
            state.isAuth = false;
        },
        [authOperations.logOut.rejected](state, action) {
           state.error = action.payload;
        },
    }
})
export const { changeBalance } = authSlice.actions;
export default authSlice.reducer;