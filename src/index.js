import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Articles from './Articles';
import ImportArticles from './ImportArticles';
import ViewArticle from './ViewArticle';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<ImportArticles/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/article/:article_id' element={<ViewArticle/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
