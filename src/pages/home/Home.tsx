import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SearchBox from '@components/containers/searchBox/SearchBox';
import cl from './Home.module.scss';

const Home: FC = () => {
  return (
    <>
      <div className={cl.container}>
        <h1 className={cl.title}>Search for books</h1>
        <SearchBox />
      </div>
      <Outlet />
    </>
  );
};

export default React.memo(Home);
