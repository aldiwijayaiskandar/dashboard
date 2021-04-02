import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// middlewares
import { middlewares } from "./middlewares";

// auth
import { authReducer } from "./auth/auth.reducer";
import { PersistConfig } from "redux-persist/es/types";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig: PersistConfig<any, any, any, any> = {
  key: "persist",
  storage: storage,
  whitelist: ["auth"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: middlewares,
});

export const persistor = persistStore(store);
