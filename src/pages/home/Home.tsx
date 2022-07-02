import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@store/index';
import {
  updateCategory,
  updateSearch,
  updateSort,
} from '@store/reducers/books';
import { CATEGORY_LIST, SORT_LIST } from '@utils/constants/app';
import AppSelect from '@components/common/appSelect/AppSelect';
import Search from 'antd/lib/input/Search';
import cl from './Home.module.scss';

const Home = () => {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState(SORT_LIST[0].name);
  const [category, setCategory] = useState(CATEGORY_LIST[0].name);
  const [search, setSearch] = useState('');

  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const searchHandler = useCallback(() => {
    dispatch(updateSearch(search));
  }, [search]);

  useEffect(() => {
    dispatch(updateSort(sort));
  }, [sort]);

  useEffect(() => {
    dispatch(updateCategory(category));
  }, [category]);

  return (
    <>
      <div className={cl.container}>
        <h1>Search for books</h1>
        <div className={cl.searchBox}>
          <Search
            enterButton
            value={search}
            onChange={inputHandler}
            onSearch={searchHandler}
          />
          <div className={cl.filterBox}>
            <AppSelect
              list={CATEGORY_LIST}
              label="Category:"
              value={category}
              setValue={setCategory}
            />
            <AppSelect
              list={SORT_LIST}
              label="Sort by:"
              value={sort}
              setValue={setSort}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
