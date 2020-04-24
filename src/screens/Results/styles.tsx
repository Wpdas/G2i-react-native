import styled from 'styled-components/native';
import { ScrollViewProps } from 'react-native';
import { ThemeProps } from '@theme';

export const ScoreContent = styled.View`
  height: 60%;
  border-bottom-color: ${(props: ThemeProps) => props.theme.current.color2};
  border-bottom-width: 1px;
  padding-bottom: 32px;
`;

export const ScoreScroll = styled.ScrollView.attrs<ScrollViewProps>({
  contentContainerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
})``;

export const ScoreItem = styled.View`
  flex-direction: row;
  padding: 16px;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-right: 8px;
`;

export const ScoreItemText = styled.Text`
  font-size: 15px;
  color: ${(props: ThemeProps) => props.theme.current.color1};
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
  flex: 8;
`;
