import React, { ChangeEvent, FC, useCallback } from 'react';
import { INameId } from '@models/app';
import cl from './AppSelect.module.scss';

export interface IBookListProps {
  list: INameId[];
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const AppSelect: FC<IBookListProps> = ({ list, label, value, setValue }) => {
  const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <label className={cl.label} htmlFor={label}>
      {label}
      <select
        className={cl.select}
        value={value}
        id={label}
        data-testid={label}
        onChange={changeHandler}
      >
        {list.map(({ name, id }) => (
          <option value={name} key={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default React.memo(AppSelect);
