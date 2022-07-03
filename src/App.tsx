import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from '@store/index';
import Home from '@pages/home/Home';
import Library from '@pages/library/Library';
import Book from '@pages/book/Book';
import '@styles/index.scss';

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<Navigate to="/library" />} />
          <Route path="/library" element={<Home />}>
            <Route index element={<Library />} />
            <Route path=":id" element={<Book />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default App;
