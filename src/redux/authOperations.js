import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}
export const loginThunk = createAsyncThunk(
    'users/login',
    async (user, thunkAPI) => {
      try {
        const { data } = await axios.post('/login',user);
        token.set(data.token)
        alert(`Добро пожаловать ${user.email}`)
        return data }
        catch (error) {
            alert('Такой пользователь не найден.Проверьте правильность ввода данных')
            return thunkAPI.rejectWithValue(error)
        }});
// export const getAllUsers = createAsyncThunk(
//     'users/getAll',
//     async(_,thunkAPI) => {
//         try {
//             const {data} = await axios.get('users')
//             return data
//         }
//         catch( error) {
//             return thunkAPI.rejectWithValue(error)
//         }
//     }
// )
 export const registerThunk = createAsyncThunk(
     'uesers/register',
     async (user,thunkAPI) => {
         try {
             const {data} = await axios.post('/register',user)
             alert('Регистрация успешна.Теперь можете залогиниться с помощью своей почты и пароля')
             return data
         }
         catch (error) {
             alert('Пользовтаель с такой почтой уже существет.Введите другую почту')
             return thunkAPI.rejectWithValue(error)
         }
     }
 )
export const getCurrentUser = createAsyncThunk(
    "auth/getCurrent",
    async (_, thunkAPI) => {
        console.log(thunkAPI.getState())
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
            if (persistedToken === null) {
              console.log('Токена нет, уходим из getCurrentUser');
              return thunkAPI.rejectWithValue();
            }
            token.set(persistedToken);
            try {
              const { data } = await axios.get('/users');
              return data;
            } catch (error) {
             return thunkAPI.rejectWithValue(error)
            }
          },
        ); 
        const logOut = createAsyncThunk('users/logout', async () => {
            try {
                await axios.post('/users')
                token.unset();
            }
            catch (error) {
                console.log(error)
            }
        })

const authOperations = {
    // getAllUsers,
    loginThunk,
    registerThunk,
    getCurrentUser,
    logOut
}
export default authOperations;