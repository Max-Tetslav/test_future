import React from 'react';
import { render, screen } from '@testing-library/react';
import AppSearch from './AppSearch';

describe('AppSearch Component', () => {
  const onSearch = jest.fn();
  const onChange = jest.fn();

  test('renders', () => {
    render(<AppSearch value="value" onSearch={onSearch} setValue={onChange} />);

    const search = screen.getByTestId(/search/i);
    expect(search).toBeInTheDocument();
  });
});
