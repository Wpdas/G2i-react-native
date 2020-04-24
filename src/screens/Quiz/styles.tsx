import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { ThemeProps } from '@theme';

export const Step = styled.Text`
  font-size: 18px;
  color: ${(props: ThemeProps) => props.theme.current.color4};
  text-align: center;
  font-family: 'VarelaRound-Regular';
  align-self: center;
  border-radius: ${Platform.OS === 'ios' ? '22px' : '28px'};
  border-color: ${(props: ThemeProps) => props.theme.current.color2};
  border-width: 2px;
  background: ${(props: ThemeProps) =>
    Platform.OS === 'ios' ? 'transparent' : props.theme.current.color5};
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
  background: ${(props: ThemeProps) => props.theme.current.trueButtonColor};
  border-color: ${(props: ThemeProps) =>
    props.theme.current.trueButtonBorderColor};
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const FalseButton = styled.TouchableOpacity`
  width: 120px;
  height: 100px;
  background: ${(props: ThemeProps) => props.theme.current.falseButtonColor};
  border-color: ${(props: ThemeProps) =>
    props.theme.current.falseButtonBorderColor};
  border-width: 2px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
