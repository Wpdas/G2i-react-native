export const UPDATE_QUESTIONS_LIST = 'questions:UPDATE_QUESTIONS_LIST';
export const ADD_ANSWER = 'questions:ADD_ANSWER';

export interface Question {
  readonly category: string;
  readonly question: string;
  readonly correctAnswer: boolean;
}

export interface Answer {
  readonly question: string;
  readonly correctAnswer: boolean;
}

// State
export interface QuestionsState {
  readonly questionsList: Array<Question>;
  readonly inGameAnswers: Array<Answer>;
}

// Update questions list actions
interface UpdateQuestionsListAction {
  readonly type: typeof UPDATE_QUESTIONS_LIST;
  readonly payload: Array<Question>;
}

// Update questions list reducer switch case
export type UpdateQuestionsListCase = (
  state: QuestionsState,
  questions: Array<Question>,
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

// Action types
export type QuestionsActionTypes = UpdateQuestionsListAction | AddAnswerAction;

// Reducer
export type QuestionsReducer = (
  state: QuestionsState,
  action: QuestionsActionTypes,
) => QuestionsState;
