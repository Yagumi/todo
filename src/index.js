import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import { ThemeProvider } from 'emotion-theming';
import App from './App';
import * as serviceWorker from './serviceWorker';
import todoStore from './stores/TodoStore';
import theme from './theme/index';

const stores = { todoStore };

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider {...stores}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
