import React, { ChangeEvent, FC, KeyboardEvent, useCallback } from 'react';
import cl from './AppSearch.module.scss';

export interface IBookListProps {
  value: string;
  onSearch: () => void;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AppSearch: FC<IBookListProps> = ({ onSearch, value, setValue }) => {
  const enterHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onSearch();
      }
    },
    [onSearch],
  );

  return (
    <input
      className={cl.input}
      type="search"
      value={value}
      onChange={setValue}
      onKeyDown={enterHandler}
    />
  );
};

export default React.memo(AppSearch);
