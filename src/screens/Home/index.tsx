import React from 'react';

import { RouteNavigationProps, routes } from '@routes';
import GradientContainer from '@components/GradientContainer';
import Container from '@components/Container';
import Header from '@components/Header';
import {
  Card,
  CardDescription,
  Text,
  BeginButton,
  BeginButtonText,
} from './styles';

interface HomeProps {
  navigation: RouteNavigationProps;
}

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
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
        <BeginButton onPress={handlerOnBeginButtonPress}>
          <BeginButtonText>BEGIN</BeginButtonText>
        </BeginButton>
      </Container>
    </GradientContainer>
  );
};

export default Home;
