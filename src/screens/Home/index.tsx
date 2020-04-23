import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { RouteNavigationProps, routes } from '@routes';
import GradientContainer from '@components/GradientContainer';
import Container from '@components/Container';
import Header from '@components/Header';

import { ReducersState } from '@store/index';
import { QuestionsState } from '@store/questions/types';
import * as questionsActions from '@store/questions/action';

import {
  Card,
  CardDescription,
  Text,
  BeginButton,
  BeginButtonText,
  Loading,
} from './styles';

interface HomeProps {
  navigation: RouteNavigationProps;
}

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  const { pending, error } = useSelector<ReducersState, QuestionsState>(
    (state) => state.questions,
  );

  const handlerOnPressTryAgain = () => {
    dispatch(questionsActions.fetchQuestions());
  };

  // Error Alert
  const showErrorAlert = (errorMessage: string) =>
    Alert.alert(
      'Error',
      errorMessage,
      [{ text: 'Try again', onPress: handlerOnPressTryAgain }],
      { cancelable: false },
    );

  useEffect(() => {
    if (error) {
      showErrorAlert(error);
    } else if (pending) {
      dispatch(questionsActions.fetchQuestions());
    }
  }, [pending, error]);

  const handlerOnBeginButtonPress = () => {
    navigation.navigate(routes.Quiz);
  };

  return (
    <GradientContainer colors={['#24A1AF', '#73C6CD']}>
      <Container>
        <Header>Welcome to the Trivia Challenge!</Header>
        <Card>
          <CardDescription>
            You will be presented with 10 True or False questions.
          </CardDescription>
        </Card>
        <Text>Can you score 100%?</Text>
        {pending ? (
          <Loading />
        ) : (
          <BeginButton onPress={handlerOnBeginButtonPress}>
            <BeginButtonText>BEGIN</BeginButtonText>
          </BeginButton>
        )}
      </Container>
    </GradientContainer>
  );
};

export default Home;
