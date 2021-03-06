import { configureStore,getDefaultMiddleware  } from '@reduxjs/toolkit'
import authReducers from './authReducers'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist : ['token'],
}
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    },
  ),
]
export const store = configureStore({
  reducer: {
    auth : persistReducer(authPersistConfig,authReducers)
  },
  middleware,
})
export const persistor = persistStore(store);