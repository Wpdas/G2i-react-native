import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { RouteNavigationProps, routes } from '@routes';
import Container from '@components/Container';
import Header from '@components/Header';
import Card from '@components/Card';
import Button from '@components/Button';

import { ReducersState } from '@store/index';
import { QuestionsState } from '@store/questions/types';
import * as questionsActions from '@store/questions/action';

import { Text, Loading } from './styles';

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
    <Container>
      <Header>Welcome to the Trivia Challenge!</Header>
      <Card light iconName="leanpub">
        You will be presented with 10 True or False questions.
      </Card>
      <Text>Can you score 100%?</Text>
      {pending ? (
        <Loading />
      ) : (
        <Button onPress={handlerOnBeginButtonPress}>BEGIN</Button>
      )}
    </Container>
  );
};

export default Home;
