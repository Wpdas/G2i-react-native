import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { XmlEntities } from 'html-entities';
import Icon from 'react-native-vector-icons/FontAwesome';

import { RouteNavigationProps, routes } from '@routes';
import { ThemeContextValue } from '@theme';
import Container from '@components/Container';
import Header from '@components/Header';
import Card from '@components/Card';

import { ReducersState } from '@store/index';
import { QuestionsState, Answer } from '@store/questions/types';
import * as questionsActions from '@store/questions/action';

import { Step, Options, TrueButton, FalseButton } from './styles';

// Used for decode html texts
const entities: XmlEntities = new XmlEntities();

interface QuizProps {
  navigation: RouteNavigationProps;
}

const Quiz: React.FC<QuizProps> = ({ navigation }: QuizProps) => {
  const dispatch = useDispatch();
  const { current: theme } = useContext<ThemeContextValue>(ThemeContext);
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
    <Container>
      <Header>{entities.decode(category)}</Header>
      <Card>{entities.decode(question)}</Card>
      <Step>
        {currentQuestionIndex} of {totalQuestions}
      </Step>
      <Options>
        <FalseButton onPress={handlerOnPressFalseOption}>
          <Icon name="times" size={50} color={theme.falseButtonBorderColor} />
        </FalseButton>
        <TrueButton onPress={handlerOnPressTrueOption}>
          <Icon name="check" size={50} color={theme.trueButtonBorderColor} />
        </TrueButton>
      </Options>
    </Container>
  );
};

export default Quiz;
