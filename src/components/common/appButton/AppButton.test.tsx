import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AppButton from './AppButton';
import cl from './AppButton.module.scss';

describe('AppButton Component', () => {
  const text = 'Load more';
  let loading = false;
  const cb = jest.fn((): void => {
    loading = !loading;
  });

  test('renders with text', () => {
    render(
      <AppButton onClick={cb} loading={loading}>
        {text}
      </AppButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(cl.btn);
    expect(button).not.toHaveClass(cl.loading);
  });

  test('renders with loading', () => {
    loading = true;
    render(
      <AppButton onClick={cb} loading={loading}>
        {text}
      </AppButton>,
    );

    const button = screen.getByRole('button');
    const spin = screen.getByTestId(/spin/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(cl.btn, cl.loading);
    expect(spin).toBeInTheDocument();
  });

  test('callback works', () => {
    render(
      <AppButton onClick={cb} loading={loading}>
        {text}
      </AppButton>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(cb).toBeCalledTimes(1);
    const spin = screen.getByTestId(/spin/i);
    expect(spin).toBeInTheDocument();
  });
});
