import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Load font assets
Icon.loadFont();

interface Props {
  light: boolean;
}

const CardContainer = styled.View.attrs((props: Props) => ({
  light: props.light,
}))`
  background: ${(props) => (props.light ? 'transparent' : '#f8f8f810')};
  height: 300px;
  margin: 0 20px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-width: 2px;
  border-color: ${(props) => (props.light ? 'transparent' : '#5c4ba9')};
  border-radius: 10px;
`;

const IconWrapper = styled.View`
  padding: 16px;
`;

const CardDescription = styled.Text.attrs((props: Props) => ({
  light: props.light,
}))`
  font-size: ${(props) => (props.light ? '24px' : '20px')};
  color: #e7e4f1;
  text-align: center;
  font-family: 'VarelaRound-Regular';
`;

interface CardProps {
  children: React.ReactNode;
  light?: boolean;
  iconName?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  light,
  iconName,
}: CardProps) => (
  <CardContainer light={light}>
    {iconName != null ? (
      <IconWrapper>
        <Icon name={iconName} size={50} color="#ffffff" />
      </IconWrapper>
    ) : null}
    <CardDescription light={light}>{children}</CardDescription>
  </CardContainer>
);

export default Card;
