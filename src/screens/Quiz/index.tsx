import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { XmlEntities } from 'html-entities';

import { RouteNavigationProps, routes } from '@routes';
import GradientContainer from '@components/GradientContainer';
import Container from '@components/Container';
import Header from '@components/Header';

import { ReducersState } from '@store/index';
import { QuestionsState, Answer } from '@store/questions/types';
import * as questionsActions from '@store/questions/action';

import {
  Card,
  CardDescription,
  Step,
  Options,
  TrueButton,
  FalseButton,
} from './styles';

// Used for decode html texts
const entities: XmlEntities = new XmlEntities();

interface QuizProps {
  navigation: RouteNavigationProps;
}

const Quiz: React.FC<QuizProps> = ({ navigation }: QuizProps) => {
  const dispatch = useDispatch();
  const [questionIndex, setQuestionIndex] = useState(0);
  const { questionsList } = useSelector<ReducersState, QuestionsState>(
    (state) => state.questions,
  );
  const { category, question, correctAnswer } = questionsList[questionIndex];
  const currentQuestionIndex = questionIndex + 1;
  const totalQuestions = questionsList.length;

  const finishGame = () => {
    navigation.navigate(routes.Results);
  };

  const registerAnswer = (userAnswer: boolean) => {
    const answer: Answer = {
      question,
      isAnswerCorrect: userAnswer === correctAnswer,
    };
    dispatch(questionsActions.addAnswer(answer));
    if (currentQuestionIndex >= totalQuestions) {
      finishGame();
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handlerOnPressTrueOption = () => {
    registerAnswer(true);
  };

  const handlerOnPressFalseOption = () => {
    registerAnswer(false);
  };

  return (
    <GradientContainer colors={['#24A1AF', '#73C6CD']}>
      <Container>
        <Header>{entities.decode(category)}</Header>
        <Card>
          <CardDescription>{entities.decode(question)}</CardDescription>
        </Card>
        <Step>
          {currentQuestionIndex} of {totalQuestions}
        </Step>
        <Options>
          <TrueButton onPress={handlerOnPressTrueOption}></TrueButton>
          <FalseButton onPress={handlerOnPressFalseOption}></FalseButton>
        </Options>
      </Container>
    </GradientContainer>
  );
};

export default Quiz;
