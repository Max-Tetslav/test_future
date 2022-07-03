import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '@store/index';
import {
  updateCategory,
  updateSearch,
  updateSort,
} from '@store/reducers/books';
import AppSelect from '@components/common/appSelect/AppSelect';
import AppSearch from '@components/common/appSearch/AppSearch';
import { CATEGORY_LIST, SORT_LIST } from '@utils/constants/app';
import cl from './SearchBox.module.scss';

const SearchBox: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState(SORT_LIST[0].name);
  const [category, setCategory] = useState(CATEGORY_LIST[0].name);
  const [search, setSearch] = useState('');

  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const searchHandler = useCallback(() => {
    if (id) {
      navigate('/library');
    }

    dispatch(updateSearch(search));
  }, [search]);

  useEffect(() => {
    if (id) {
      navigate('/library');
    }

    dispatch(updateSort(sort));
  }, [sort]);

  useEffect(() => {
    if (id) {
      navigate('/library');
    }

    dispatch(updateCategory(category));
  }, [category]);

  return (
    <div className={cl.searchBox}>
      <AppSearch
        value={search}
        setValue={inputHandler}
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
  );
};

export default SearchBox;
