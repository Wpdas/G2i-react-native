import {
  UPDATE_QUESTIONS_LIST,
  ADD_ANSWER,
  QuestionsState,
  UpdateQuestionsListCase,
  AddAnswerCase,
  QuestionsReducer,
} from './types';

const initialState: QuestionsState = {
  questionsList: [],
  inGameAnswers: [],
};

// Cases
const updateQuestionsListCase: UpdateQuestionsListCase = (state, questions) => {
  return {
    ...state,
    questionsList: questions,
  };
};

const addAnswerCase: AddAnswerCase = (state, answer) => {
  return {
    ...state,
    inGameAnswers: [...state.inGameAnswers, answer],
  };
};

// Reducer
const reducer: QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUESTIONS_LIST:
      return updateQuestionsListCase(state, action.payload);
    case ADD_ANSWER:
      return addAnswerCase(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
