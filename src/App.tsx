import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AnimeList from './pages/AnimeList';
import AnimeDetail from './pages/AnimeDetail';
import PageNotFound from './pages/PageNotFound';
import { css } from '@emotion/react';
import { COLORS } from './styles/Constant';
import NavBar from './components/Navbar';

function App() {
  return (
    <div css={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: COLORS.black,
      color: COLORS.green,
      padding: '1rem',
      height: '100%'
    })}>
      <Router>
        <NavBar />
        <div css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}>
          <Routes>
            <Route path='/home' element={<AnimeList />} />
            <Route path='/animes/:id' element={<AnimeDetail />} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
