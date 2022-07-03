import React, { FC } from 'react';
import classNames from 'classnames';
import cl from './Spin.module.scss';

interface ISpinProps {
  className?: string;
  loading?: boolean;
}

const Spin: FC<ISpinProps> = ({ className, loading }) => {
  const classes = classNames(cl.container, className, { [cl.small]: loading });

  return <div className={classes} />;
};

export default React.memo(Spin);
