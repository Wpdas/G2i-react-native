import styled from 'styled-components/native';
import { ActivityIndicatorProps } from 'react-native';
import { ThemeProps } from '@theme';

export const Text = styled.Text`
  font-size: 22px;
  color: ${(props: ThemeProps) => props.theme.current.color1};
  text-align: center;
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

export const Loading = styled.ActivityIndicator.attrs<
  ActivityIndicatorProps & ThemeProps
>(({ theme }) => ({
  size: 'large',
  color: theme.current.color1,
}))`
  padding-bottom: 50px;
`;
