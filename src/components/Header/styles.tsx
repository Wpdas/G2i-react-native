import styled from 'styled-components/native';
import { ThemeProps } from '@theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 25px 2px;
  height: 118px;
  border-bottom-color: ${(props: ThemeProps) => props.theme.current.color2};
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${(props: ThemeProps) => props.theme.current.color1};
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;
