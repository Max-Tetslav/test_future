import React, { FC } from 'react';
import cl from './AppError.module.scss';

interface IErrorProps {
  code: string | number;
}

const AppError: FC<IErrorProps> = ({ code }) => {
  return (
    <div className={cl.error} data-testid="error">
      <h2 className={cl.code}>{code}</h2>
      <p className={cl.text}>Something went wrong...</p>
    </div>
  );
};

export default React.memo(AppError);
