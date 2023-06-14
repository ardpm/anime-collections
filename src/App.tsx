import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AnimeList from './pages/AnimeList';
import AnimeDetail from './pages/AnimeDetail';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AnimeList/>}/>
        <Route path='/:id' element={<AnimeDetail/>}/>
        <Route path='*' element={<PageNotFound/>}/>        
      </Routes>
    </Router>
  );
}

export default App;
