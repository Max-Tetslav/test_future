import React, { FC } from 'react';
import classNames from 'classnames';
import Spin from '../spin/Spin';
import cl from './AppButton.module.scss';

interface IAppButtonProps {
  onClick: () => void;
  loading: boolean;
}

const AppButton: FC<IAppButtonProps> = ({ onClick, loading, children }) => {
  const classes = classNames(cl.btn, { [cl.loading]: loading });

  return (
    <button className={classes} type="button" onClick={onClick}>
      {!loading ? children : <Spin loading={loading} />}
    </button>
  );
};

export default AppButton;
