import allReducer from './reducers/index.js'; // Import cartReducer
import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, allReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };