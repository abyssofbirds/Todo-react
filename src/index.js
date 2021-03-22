import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoPage from './TodoPage'

ReactDOM.render(
  <React.StrictMode>
    <TodoPage />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
