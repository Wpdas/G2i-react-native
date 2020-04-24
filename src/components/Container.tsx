import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { ThemeProps } from '@theme';

const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-around;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getBottomSpace()}px;
  background: ${(props: ThemeProps) => props.theme.current.backgroundColor};
`;

export default Container;
