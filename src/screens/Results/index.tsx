import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { XmlEntities } from 'html-entities';

import { RouteNavigationProps, routes } from '@routes';
import GradientContainer from '@components/GradientContainer';
import Container from '@components/Container';
import Header from '@components/Header';

import { ReducersState } from '@store/index';
import { QuestionsState } from '@store/questions/types';
import * as questionsActions from '@store/questions/action';

import {
  PlayAgainButton,
  PlayAgainButtonText,
  ScoreContent,
  ScoreScroll,
  ScoreItem,
  ScoreItemText,
  // ScoreItemImage,
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
      {/* <ScoreItemImage /> */}
      <ScoreItemText>
        {answer.isAnswerCorrect ? 'P' : 'N'} -{' '}
        {entities.decode(answer.question)}
      </ScoreItemText>
    </ScoreItem>
  ));

  const handlerOnPressPlayAgain = () => {
    dispatch(questionsActions.clearData());
    navigation.navigate(routes.Home);
  };

  return (
    <GradientContainer colors={['#24A1AF', '#73C6CD']}>
      <Container>
        <Header>
          You scored {correctAnswers} / {totalAnswers}
        </Header>
        <ScoreContent>
          <ScoreScroll>{scoreItems}</ScoreScroll>
        </ScoreContent>
        <PlayAgainButton onPress={handlerOnPressPlayAgain}>
          <PlayAgainButtonText>PLAY AGAIN ?</PlayAgainButtonText>
        </PlayAgainButton>
      </Container>
    </GradientContainer>
  );
};

export default Results;
