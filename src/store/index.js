import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistReducer , persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "root",
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const globalStore = createStore(
    persistedReducer,
    composedEnhancers(applyMiddleware(thunk))
);

const persistedStore = persistStore(globalStore);

export { globalStore, persistedStore };