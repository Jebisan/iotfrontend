import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';
import Root from './components/Root';
import Route from './routers/AppRouter';

const store = configureStore();


const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>  
  );

ReactDOM.render(jsx, document.getElementById('app'));
