import React from 'react';

import GradientContainer from '@components/GradientContainer';
import Container from '@components/Container';
import Header from '@components/Header';
import {
  PlayAgainButton,
  PlayAgainButtonText,
  ScoreTable,
  ScoreItem,
  ScoreItemText,
  ScoreItemImage,
} from './styles';

const Results: React.FC = () => (
  <GradientContainer colors={['#24A1AF', '#73C6CD']}>
    <Container>
      <Header>You scored 3 / 10</Header>
      <ScoreTable>
        <ScoreItem>
          {/* <ScoreItemImage /> */}
          <ScoreItemText>
            Unturned originally started as a Roblox game
          </ScoreItemText>
        </ScoreItem>
      </ScoreTable>
      <PlayAgainButton>
        <PlayAgainButtonText>PLAY AGAIN ?</PlayAgainButtonText>
      </PlayAgainButton>
    </Container>
  </GradientContainer>
);

export default Results;
