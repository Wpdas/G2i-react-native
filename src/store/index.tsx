import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import questionsReducer from './questions/reducer';

// Reducers
const reducers = combineReducers({
  questions: questionsReducer,
});

// Store
const store = createStore(reducers);

// Provider
interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({
  children,
}: ReduxProviderProps) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
