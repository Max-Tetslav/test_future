import React, { FC } from 'react';
import classNames from 'classnames';
import cl from './Spin.module.scss';

interface ISpinProps {
  className?: string;
  small?: boolean;
}

const Spin: FC<ISpinProps> = ({ className, small }) => {
  const classes = classNames(cl.container, className, { [cl.small]: small });

  return <div className={classes} data-testid="spin" />;
};

export default React.memo(Spin);
