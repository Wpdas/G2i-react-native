/**
 * All actions for Questions are here
 */

import {
  Question,
  QuestionsActionTypes,
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  QuestionsFetchError,
  Answer,
  ADD_ANSWER,
  CLEAR_DATA,
} from './types';

import * as questionsApi from '@api/questions';

export const fetchQuestionsBegin = (): QuestionsActionTypes => {
  return {
    type: FETCH_QUESTIONS_BEGIN,
  };
};

export const fetchQuestionsSuccess = (
  questions: Array<Question>,
): QuestionsActionTypes => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions,
  };
};

export const fetchQuestionsError = (
  error: QuestionsFetchError,
): QuestionsActionTypes => {
  return {
    type: FETCH_QUESTIONS_ERROR,
    payload: error,
  };
};

export const addAnswer = (answer: Answer): QuestionsActionTypes => {
  return {
    type: ADD_ANSWER,
    payload: answer,
  };
};

export const clearData = (): QuestionsActionTypes => {
  return {
    type: CLEAR_DATA,
  };
};

type DispatchProps = (action: QuestionsActionTypes) => unknown;

/**
 * Initial fetch questions data from server
 */
export const fetchQuestions = () => {
  return async (dispatch: DispatchProps) => {
    dispatch(fetchQuestionsBegin());

    const { results, status } = await questionsApi.getQuestions();

    if (status === 200) {
      const questions = results?.map((questionServerData) => {
        return {
          category: questionServerData.category,
          question: questionServerData.question,
          correctAnswer: questionServerData.correct_answer === 'True',
        } as Question;
      });

      dispatch(fetchQuestionsSuccess(questions || []));
    } else {
      dispatch(
        fetchQuestionsError(
          'Something went wrong while fetching questions data from server!',
        ),
      );
    }
  };
};
