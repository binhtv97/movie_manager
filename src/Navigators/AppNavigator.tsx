import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './RootNavigation';
import {MainNavigator} from './StackNavigation';
import {colors} from '../Themes';

function AppNavigation(): React.ReactElement {
  function renderStack(): React.ReactNode {
    return <MainNavigator />;
  }

  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          ...DarkTheme.colors,
          background: colors.transparent,
        },
      }}
      ref={navigationRef}>
      {renderStack()}
    </NavigationContainer>
  );
}

export default AppNavigation;
