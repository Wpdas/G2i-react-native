/**
 * All types for Questions are here
 */

export const FETCH_QUESTIONS_BEGIN = 'questions:FETCH_QUESTIONS_BEGIN';
export const FETCH_QUESTIONS_SUCCESS = 'questions:FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_ERROR = 'questions:FETCH_QUESTIONS_ERROR';
export const ADD_ANSWER = 'questions:ADD_ANSWER';
export const CLEAR_DATA = 'questions:CLEAR_DATA';

export interface Question {
  readonly category: string;
  readonly question: string;
  readonly correctAnswer: boolean;
}

export interface Answer {
  readonly question: string;
  readonly isAnswerCorrect: boolean;
}

export type QuestionsFetchError = string;

// State
export interface QuestionsState {
  readonly pending: boolean;
  readonly error: string | null;
  readonly questionsList: Array<Question>;
  readonly inGameAnswers: Array<Answer>;
}

// Fetchs actions
interface FetchQuestionsBeginAction {
  readonly type: typeof FETCH_QUESTIONS_BEGIN;
}

interface FetchQuestionsSuccessAction {
  readonly type: typeof FETCH_QUESTIONS_SUCCESS;
  readonly payload: Array<Question>;
}

interface FetchQuestionsErrorAction {
  readonly type: typeof FETCH_QUESTIONS_ERROR;
  readonly payload: QuestionsFetchError;
}

// Fetchs reducer switch cases
export type FetchQuestionsBeginCase = (state: QuestionsState) => QuestionsState;

export type FetchQuestionsSuccessCase = (
  state: QuestionsState,
  questions: Array<Question>,
) => QuestionsState;

export type FetchQuestionsErrorCase = (
  state: QuestionsState,
  error: QuestionsFetchError,
) => QuestionsState;

// Add answer action
interface AddAnswerAction {
  readonly type: typeof ADD_ANSWER;
  readonly payload: Answer;
}

// Add answer reducer switch case
export type AddAnswerCase = (
  state: QuestionsState,
  answer: Answer,
) => QuestionsState;

// Clear data action
interface ClearDataAction {
  readonly type: typeof CLEAR_DATA;
}

// Clear data reducer switch case
export type ClearDataCase = () => QuestionsState;

// Action types
export type QuestionsActionTypes =
  | FetchQuestionsBeginAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction
  | AddAnswerAction
  | ClearDataAction;

// Reducer
export type QuestionsReducer = (
  state: QuestionsState,
  action: QuestionsActionTypes,
) => QuestionsState;
