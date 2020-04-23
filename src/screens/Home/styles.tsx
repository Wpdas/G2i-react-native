import styled from 'styled-components/native';
import { ActivityIndicatorProps } from 'react-native';

export const Text = styled.Text`
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  font-family: 'VarelaRound-Regular';
`;

export const Loading = styled.ActivityIndicator.attrs<ActivityIndicatorProps>(
  () => ({
    size: 'large',
    color: '#ffffff',
  }),
)`
  padding-bottom: 50px;
`;
