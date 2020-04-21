import Api from '.';

interface QuestionsQueryProps {
  readonly amount: number;
}

interface QuestionsResult {
  readonly category: string;
  readonly type: string;
  readonly difficulty: string;
  readonly question: string;
  readonly correct_answer: string;
  readonly incorrect_answers: Array<string>;
}

interface QuestionsResponse {
  readonly response_code: number;
  readonly results: Array<QuestionsResult>;
}

/**
 * Get a list of questions
 * @param amount Amount of questions
 */
const getQuestions = async ({ amount = 10 }: QuestionsQueryProps) => {
  return Api.get<QuestionsResponse>(
    `?amount=${amount}&difficulty=hard&type=boolean`,
  );
};

export default getQuestions;
