import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AppSelect from './AppSelect';

const values = [
  {
    name: '1',
    id: 0,
  },
  {
    name: '2',
    id: 1,
  },
  {
    name: '3',
    id: 2,
  },
];

describe('AppSelect Component', () => {
  test('renders and onChange works', () => {
    const cb = jest.fn();
    render(
      <AppSelect
        label="label"
        value={values[0].name}
        list={values}
        setValue={cb}
      />,
    );

    const select = screen.getByTestId(/label/i);

    fireEvent.change(select);
    expect(cb).toBeCalled();
  });
});
