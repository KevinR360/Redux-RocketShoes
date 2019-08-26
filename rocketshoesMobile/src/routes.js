import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {Home, Cart},
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#141419',
      },
    }
  )
);

export default Routes;
