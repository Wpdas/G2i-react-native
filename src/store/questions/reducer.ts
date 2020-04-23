/**
 * Reducer for Questions.
 */

import {
  QuestionsState,
  FetchQuestionsBeginCase,
  FetchQuestionsSuccessCase,
  FetchQuestionsErrorCase,
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  AddAnswerCase,
  ADD_ANSWER,
  QuestionsReducer,
  CLEAR_DATA,
  ClearDataCase,
} from './types';

const initialState: QuestionsState = {
  pending: true,
  error: null,
  questionsList: [],
  inGameAnswers: [],
};

/**
 * Case - Begin fech questions
 */
const fetchQuestionsBeginCase: FetchQuestionsBeginCase = (state) => {
  return {
    ...state,
    pending: true,
    error: null,
  };
};

/**
 * Case - Fetch questions success
 */
const fetchQuestionsSucessCase: FetchQuestionsSuccessCase = (
  state,
  questions,
) => {
  return {
    ...state,
    questionsList: questions,
    pending: false,
  };
};

/**
 * Case - Fech questions error
 */
const fetchQuestionsErrorCase: FetchQuestionsErrorCase = (state, error) => {
  return {
    ...state,
    error,
    pending: true,
  };
};

const addAnswerCase: AddAnswerCase = (state, answer) => {
  return {
    ...state,
    inGameAnswers: [...state.inGameAnswers, answer],
  };
};

const clearDataCase: ClearDataCase = () => {
  return initialState;
};

// Reducer
const reducer: QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_BEGIN:
      return fetchQuestionsBeginCase(state);
    case FETCH_QUESTIONS_SUCCESS:
      return fetchQuestionsSucessCase(state, action.payload);
    case FETCH_QUESTIONS_ERROR:
      return fetchQuestionsErrorCase(state, action.payload);
    case ADD_ANSWER:
      return addAnswerCase(state, action.payload);
    case CLEAR_DATA:
      return clearDataCase();
    default:
      return state;
  }
};

export default reducer;
