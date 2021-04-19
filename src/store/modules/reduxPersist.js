import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME-APP',
      storage,
      whitelist: ['example'],
    },
    reducers
  );

  return persistedReducers;
};
