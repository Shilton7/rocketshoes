import React from 'react';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
