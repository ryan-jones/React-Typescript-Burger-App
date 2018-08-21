import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  app,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
