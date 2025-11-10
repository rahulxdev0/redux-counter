import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo", "counter"], // only persist todo and counter reducers
};

const rootReducer = combineReducers({
  counter: CounterSlice.reducer,
  todo: todoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      },
    }),
});

export const persistor = persistStore(store);
export default store; // Don't forget to export the store