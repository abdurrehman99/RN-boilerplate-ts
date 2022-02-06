import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import MMKVStorage from 'react-native-mmkv-storage';
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

// create redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// initialize persist storage
const persistStorage = new MMKVStorage.Loader().withEncryption().initialize();

// redux-persist config
const persistConfig = {
	key: 'root:todoapp',
	storage: persistStorage,
	whitelist: ['auth', 'todos'],
};

// initialize persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Define redux middlewares
const middlewares = [sagaMiddleware, logger];

// store for Provider component
const store = createStore(persistedReducer, applyMiddleware(...middlewares));

// persist store for PersistGate component
const persistor = persistStore(store as any);

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

export {store, persistor};
