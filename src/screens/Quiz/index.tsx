import React from 'react';

import GradientContainer from '@components/GradientContainer';
import Container from '@components/Container';
import Header from '@components/Header';
import {
  Card,
  CardDescription,
  Step,
  Options,
  TrueButton,
  FalseButton,
} from './styles';

const Quiz: React.FC = () => (
  <GradientContainer colors={['#24A1AF', '#73C6CD']}>
    <Container>
      <Header>Entertainment: Video Games</Header>
      <Card>
        <CardDescription>
          Unturned originally started as a Roblox game.
        </CardDescription>
      </Card>
      <Step>1 of 10</Step>
      <Options>
        <TrueButton></TrueButton>
        <FalseButton></FalseButton>
      </Options>
    </Container>
  </GradientContainer>
);

export default Quiz;
