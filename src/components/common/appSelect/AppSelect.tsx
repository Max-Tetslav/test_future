import React, { FC, useCallback } from 'react';
import { INameId } from '@models/app';
import { Select } from 'antd';
import cl from './AppSelect.module.scss';

export interface IBookListProps {
  list: INameId[];
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const { Option } = Select;

const AppSelect: FC<IBookListProps> = ({ list, label, value, setValue }) => {
  const changeHandler = useCallback((select: string) => {
    setValue(select);
  }, []);

  return (
    <label className={cl.label} htmlFor={label}>
      {label}
      <Select
        defaultValue={list[0].name}
        value={value}
        id={label}
        onChange={changeHandler}
      >
        {list.map(({ name, id }) => (
          <Option value={name} key={id}>
            {name}
          </Option>
        ))}
      </Select>
    </label>
  );
};

export default AppSelect;
