import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRoute from './Route';
import App from './App'
import BlogPage from './Components/blogpage/blog'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRoute />
  </React.StrictMode>
);


