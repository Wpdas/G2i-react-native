import styled from 'styled-components/native';

import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-around;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getBottomSpace()}px;
  background: #3c3272;
`;

export default Container;
