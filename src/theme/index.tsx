import React, { useState } from 'react';
import { ThemeProvider, ThemedStyledProps } from 'styled-components';
import { AppLoading } from 'expo';

import light from './light';
import fetchFonts from './fetchFonts';

export type Theme = {
  readonly nubankColor1: string;
  readonly nubankColor2: string;
  readonly nubankColor3: string;
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly tertiaryColor: string;
  readonly primaryIconColor: string;
  readonly secondaryIconColor: string;
  readonly tertiaryIconColor: string;
  readonly primaryTextColor: string;
  readonly secondaryTextColor: string;
  readonly tertiaryTextColor: string;
  readonly regularFont: string;
};

/** List of themes */
export const themes = {
  light,
};

// Using this style to allow use anothers props in the future
export type ThemeContextValue = {
  readonly current: Theme;
  readonly fontLoaded?: boolean;
};

const defaultValue: ThemeContextValue = {
  current: light,
};

/** Props to be used within styles */
export type ThemeProps = ThemedStyledProps<{}, ThemeContextValue>;

type Props = {
  children: React.ReactNode;
};

const CustomThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const handlerOnAppLoads = () => setFontLoaded(true);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={handlerOnAppLoads}>
        <ThemeProvider theme={defaultValue}>{children}</ThemeProvider>
      </AppLoading>
    );
  }

  return (
    <ThemeProvider theme={{ ...defaultValue, fontLoaded }}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
