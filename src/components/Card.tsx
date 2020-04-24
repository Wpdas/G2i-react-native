import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProps, ThemeContextValue } from '@theme';

// Load font assets
Icon.loadFont();

interface Props {
  light: boolean;
}

const CardContainer = styled.View.attrs((props: Props) => ({
  light: props.light,
}))`
  background: ${(props: ThemeProps & Props) =>
    props.light ? 'transparent' : props.theme.current.color3};
  height: 300px;
  margin: 0 20px;
  max-width: 323px;
  width: 88.8%;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-width: 2px;
  border-color: ${(props: ThemeProps & Props) =>
    props.light ? 'transparent' : props.theme.current.color2};
  border-radius: 10px;
`;

const IconWrapper = styled.View`
  padding: 16px;
`;

const CardDescription = styled.Text.attrs((props: Props) => ({
  light: props.light,
}))`
  font-size: ${(props) => (props.light ? '24px' : '20px')};
  color: ${(props: ThemeProps) => props.theme.current.color1};
  text-align: center;
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

interface CardProps {
  children: React.ReactNode;
  /** Light Card version */
  light?: boolean;
  /** Icon name - shows if set */
  iconName?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  light,
  iconName,
}: CardProps) => {
  const { current: theme } = useContext<ThemeContextValue>(ThemeContext);

  return (
    <CardContainer light={light}>
      {iconName != null ? (
        <IconWrapper>
          <Icon name={iconName} size={50} color={theme.color1} />
        </IconWrapper>
      ) : null}
      <CardDescription light={light}>{children}</CardDescription>
    </CardContainer>
  );
};

export default Card;
