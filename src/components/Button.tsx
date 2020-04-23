import React from 'react';
import styled from 'styled-components/native';
import { GestureResponderEvent } from 'react-native';

const BeginButton = styled.TouchableOpacity`
  justify-content: center;
  border-width: 1px;
  border-color: #ffff;
  align-items: center;
  padding: 22px 20%;
  margin: 0 20px;
  margin-bottom: 20px;
`;

const BeginButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'VarelaRound-Regular';
`;

interface ButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onPress }: ButtonProps) => (
  <BeginButton onPress={onPress}>
    <BeginButtonText>{children}</BeginButtonText>
  </BeginButton>
);

export default Button;
