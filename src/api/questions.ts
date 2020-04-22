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

interface ResponseProps {
  readonly response_code: number;
  readonly results: Array<QuestionsResult>;
}

export interface QuestionsResponse {
  readonly responseCode: number;
  readonly results: Array<QuestionsResult>;
}

/**
 * Get a list of questions
 * @param amount Amount of questions
 */
const getQuestions = async ({ amount = 10 }: QuestionsQueryProps) => {
  const { status, data } = await Api.get<ResponseProps>(
    `?amount=${amount}&difficulty=hard&type=boolean`,
  );

  if (status === 200) {
    return {
      responseCode: data.response_code,
      results: data.results,
    } as QuestionsResponse;
  }

  return {
    responseCode: data.response_code,
    results: [],
  } as QuestionsResponse;
};

export default getQuestions;
