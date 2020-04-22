import styled from 'styled-components/native';

import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  justify-content: space-around;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getBottomSpace() + 20}px;
`;

export default Container;
