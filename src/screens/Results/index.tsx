import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { XmlEntities } from 'html-entities';
import Icon from 'react-native-vector-icons/FontAwesome';

import { RouteNavigationProps, routes } from '@routes';
import Container from '@components/Container';
import Header from '@components/Header';
import Button from '@components/Button';

import { ReducersState } from '@store/index';
import { QuestionsState } from '@store/questions/types';
import * as questionsActions from '@store/questions/action';

import {
  ScoreContent,
  ScoreScroll,
  ScoreItem,
  ScoreItemText,
  IconWrapper,
} from './styles';

// Used for decode html texts
const entities: XmlEntities = new XmlEntities();

interface ResultsProps {
  navigation: RouteNavigationProps;
}

const Results: React.FC<ResultsProps> = ({ navigation }: ResultsProps) => {
  const dispatch = useDispatch();
  const { inGameAnswers } = useSelector<ReducersState, QuestionsState>(
    (state) => state.questions,
  );

  const totalAnswers = inGameAnswers.length;
  const correctAnswers = inGameAnswers.filter((answer) => {
    return answer.isAnswerCorrect === true;
  }).length;

  const scoreItems = inGameAnswers.map((answer, index) => (
    <ScoreItem key={index}>
      {answer.isAnswerCorrect ? (
        <IconWrapper>
          <Icon name="check" size={22} color="#4ACCA8" />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <Icon name="times" size={22} color="#E1656D" />
        </IconWrapper>
      )}
      <ScoreItemText>{entities.decode(answer.question)}</ScoreItemText>
    </ScoreItem>
  ));

  useEffect(() => {
    return () => {
      dispatch(questionsActions.clearData());
    };
  });

  const handlerOnPressPlayAgain = () => {
    navigation.navigate(routes.Home);
  };

  return (
    <Container>
      <Header>
        You scored {correctAnswers} / {totalAnswers}
      </Header>
      <ScoreContent>
        <ScoreScroll>{scoreItems}</ScoreScroll>
      </ScoreContent>
      <Button onPress={handlerOnPressPlayAgain}>PLAY AGAIN ?</Button>
    </Container>
  );
};

export default Results;
