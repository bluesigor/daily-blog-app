import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userSettingsReducer from './reducers/userSettingsSlice'
import userDataReducer from './reducers/userDataSlice'

const rootReducer = combineReducers({
  userSettings: userSettingsReducer,
  userData: userDataReducer,
})

const settingsPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['userSettings', 'userData'],
}

const persistedReducer = persistReducer(settingsPersistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store
