import styled from 'styled-components/native';

export const Step = styled.Text`
  font-size: 18px;
  color: #e7e4f1;
  text-align: center;
  font-family: 'VarelaRound-Regular';
  background: #362c65;
  align-self: center;
  border-radius: 35px;
  border-color: #5c4ba9;
  border-width: 2px;
  padding: 12px 40px 10px 40px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 40px;
  margin: 0 20px;
`;

export const TrueButton = styled.TouchableOpacity`
  width: 120px;
  height: 100px;
  background: #4acca820;
  border-color: #4acca8;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const FalseButton = styled.TouchableOpacity`
  width: 120px;
  height: 100px;
  background: #e1656d20;
  border-color: #e1656d;
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
