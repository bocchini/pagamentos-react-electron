import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './index.css';

import Pagamentos from './pages/Pagamentos';
import Sobre from 'pages/Sobre';

ReactDOM.render(
  <React.StrictMode>
    <Pagamentos/>
    <Sobre/>
  </React.StrictMode>,
  document.getElementById('root')
);
