import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';

import store from './store';
import NavigationService from './services/navigations';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    </>
  );
}
