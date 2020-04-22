import {
  Question,
  QuestionsActionTypes,
  UPDATE_QUESTIONS_LIST,
  Answer,
  ADD_ANSWER,
} from './types';

export const updateQuestionsList = (
  questions: Array<Question>,
): QuestionsActionTypes => {
  return {
    type: UPDATE_QUESTIONS_LIST,
    payload: questions,
  };
};

export const addAnswer = (answer: Answer): QuestionsActionTypes => {
  return {
    type: ADD_ANSWER,
    payload: answer,
  };
};
