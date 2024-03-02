import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice.js'; // Importing userReducer from userSlice.js
import { persistReducer, persistStore } from 'redux-persist'; // Importing persistReducer and persistStore from redux-persist
import storage from 'redux-persist/lib/storage'; // Importing storage from redux-persist

// Combining reducers into rootReducer
const rootReducer = combineReducers({
  user: userReducer,
});

// Configuration for persisting Redux state
const persistConfig = {
  key: 'root', // Key for the persisted state in the storage
  storage, // Storage engine to use for persisting state (in this case, it's localStorage)
  version: 1, // Version of the persisted state
};

// Creating a persisted reducer using persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring Redux store
export const store = configureStore({
  reducer: persistedReducer, // Using the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Disabling serializable check as redux-persist handles it
});

// Creating a persistor using persistStore
export const persistor = persistStore(store);
