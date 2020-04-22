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

export const Step = styled.Text`
  font-size: 22px;
  color: #ffffff;
  text-align: center;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const TrueButton = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  background: #309b32;
`;

export const FalseButton = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  background: #b22222;
`;
