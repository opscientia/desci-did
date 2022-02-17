import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    ConnectORCID,
    ConnectTwitter,
    ConnectGithub,
    Dashboard
}  from './main'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="ConnectORCID" element={<ConnectORCID />} />
            <Route path="ConnectTwitter" element={<ConnectTwitter />} />
            <Route path="ConnectGithub" element={<ConnectGithub />} />
            <Route path="Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
