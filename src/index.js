import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticlePage from './Page/ArticlePage';
import MainApp from './Page/MainPage';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ChatPage from './Page/ChatPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/articlePage" element={<ArticlePage />} />
        <Route path="/chatPage" element={<ChatPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
