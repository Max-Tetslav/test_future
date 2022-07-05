import React from 'react';
import { render, screen } from '@testing-library/react';
import Spin from './Spin';
import cl from './Spin.module.scss';

describe('Spin Component', () => {
  test('renders', () => {
    render(<Spin />);

    const spin = screen.getByTestId(/spin/i);
    expect(spin).toBeInTheDocument();
    expect(spin).toHaveClass(cl.container);
    expect(spin).not.toHaveClass(cl.small);
  });

  test('renders with small prop', () => {
    render(<Spin small />);

    const spin = screen.getByTestId(/spin/i);
    expect(spin).toBeInTheDocument();
    expect(spin).toHaveClass(cl.small);
  });

  test('extra className exist', () => {
    render(<Spin className="extra" />);

    const spin = screen.getByTestId(/spin/i);
    expect(spin).toBeInTheDocument();
    expect(spin).toHaveClass(cl.container, 'extra');
  });

  test('small with extra className', () => {
    render(<Spin className="extra" small />);

    const spin = screen.getByTestId(/spin/i);
    expect(spin).toBeInTheDocument();
    expect(spin).toHaveClass(cl.container, 'extra', cl.small);
  });
});
