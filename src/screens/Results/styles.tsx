import styled from 'styled-components/native';

export const ScoreTable = styled.View`
  background: #ffffff20;
  height: 50%;
`;

export const ScoreItem = styled.View`
  flex-direction: row;
  padding: 16px;
`;

// Set Positive or negative image using props
export const ScoreItemImage = styled.Image``;

export const ScoreItemText = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const PlayAgainButton = styled.TouchableOpacity`
  justify-content: center;
  border-width: 1px;
  border-color: #ffff;
  align-items: center;
  padding: 22px 20%;
  margin-bottom: 20px;
`;

export const PlayAgainButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
