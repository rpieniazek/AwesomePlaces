import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/config.store';

const store = configureStore();

const RNRedux = () =>(// function, because registry component expects function, that returns JSX
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('rnapp', () => RNRedux);
