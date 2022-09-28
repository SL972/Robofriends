import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from '../src/Components/CardList';
import 'tachyons'

import reportWebVitals from './reportWebVitals';
import App from './Containers/App.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)


reportWebVitals();
