import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoveCompatibilityQuiz from './Quiz'; // ✅ double-check this matches file name exactly

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoveCompatibilityQuiz />
  </React.StrictMode>
);
