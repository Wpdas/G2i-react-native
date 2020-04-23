import Api from '.';

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
  readonly status: number;
  readonly responseCode: number | null;
  readonly results: Array<QuestionsResult> | null;
}

/**
 * Get a list of questions
 * @param amount Amount of questions
 */
async function getQuestions(amount = 10): Promise<QuestionsResponse> {
  const { status, data } = await Api.get<ResponseProps | null>(
    `?amount=${amount}&difficulty=hard&type=boolean`,
  );

  return {
    status,
    responseCode: data?.response_code || null,
    results: data?.results || null,
  } as QuestionsResponse;
}

export { getQuestions };
