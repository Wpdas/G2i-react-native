import 'react-native-gesture-handler';
import React from 'react';

import ReduxProvider from '@store/index';
import CustomThemeProvider from '@theme';
import Routes from '@routes';

export default class App extends React.Component {
  render() {
    return (
      <ReduxProvider>
        <CustomThemeProvider>
          <Routes />
        </CustomThemeProvider>
      </ReduxProvider>
    );
  }
}
