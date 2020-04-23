import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import questionsReducer from './questions/reducer';

// Reducers
const reducers = combineReducers({
  questions: questionsReducer,
});

export type ReducersState = ReturnType<typeof reducers>;

// Store (+ thunk to allow dispatch actions)
const store = createStore(reducers, applyMiddleware(thunk));

// Provider
interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({
  children,
}: ReduxProviderProps) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
