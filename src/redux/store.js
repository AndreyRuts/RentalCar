import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
  
import { carsReducer } from './catalog/slice';
import filtersReducer from './filters/slice';
import { favoritesReducer } from './favorites/slice';


const rootReducer = combineReducers({
  cars: carsReducer,
  filters: filtersReducer,
  favorites: favoritesReducer
});  
  
const persistConfig = {
    key: 'favorites',
    storage,
    whitelist: ['favorites']
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  
  export const persistor = persistStore(store);