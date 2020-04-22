import styled from 'styled-components/native';

export const Card = styled.View`
  background: #24a1af;
  height: 300px;
  width: 300px;
  align-self: center;
  justify-content: center;
  padding: 24px;
`;

export const CardDescription = styled.Text`
  font-size: 22px;
  color: #ffffff;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 22px;
  color: #ffffff;
  text-align: center;
`;

export const BeginButton = styled.TouchableOpacity`
  justify-content: center;
  border-width: 1px;
  border-color: #ffff;
  align-items: center;
  padding: 22px 20%;
  margin-bottom: 20px;
`;

export const BeginButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
