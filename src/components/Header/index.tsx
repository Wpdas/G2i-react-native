import React from 'react';
import { Container, Title } from './styles';

interface HeaderProps {
  readonly children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => (
  <Container>
    <Title>{children}</Title>
  </Container>
);

export default Header;
