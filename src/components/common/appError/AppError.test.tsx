import React from 'react';
import { render, screen } from '@testing-library/react';
import AppError from './AppError';
import cl from './AppError.module.scss';

describe('AppError Component', () => {
  const num = 400;
  const str = 'ERROR';

  test('renders with number as code', () => {
    render(<AppError code={400} />);

    const error = screen.getByTestId(/error/i);
    expect(error).toBeInTheDocument();
    expect(error.firstChild?.textContent).toBe(num.toString());
    expect(error).toHaveClass(cl.error);
  });

  test('renders with string as code', () => {
    render(<AppError code={str} />);

    const error = screen.getByTestId(/error/i);
    expect(error).toBeInTheDocument();
    expect(error.firstChild?.textContent).toBe(str);
    expect(error).toHaveClass(cl.error);
  });
});
