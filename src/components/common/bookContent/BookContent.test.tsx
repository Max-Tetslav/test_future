import React from 'react';
import { render, screen } from '@testing-library/react';
import { IBook } from '@models/store';
import { MOCK_BOOK } from '@utils/constants/app';
import BookContent from './BookContent';

describe('BookContent Component', () => {
  test('renders if every prop exists', () => {
    render(<BookContent book={MOCK_BOOK as IBook} />);

    const img = screen.getByAltText(/cover/i);
    const title = screen.getByText(MOCK_BOOK.volumeInfo.title);
    const category = screen.getByText(
      MOCK_BOOK.volumeInfo.categories.join(', '),
    );
    const author = screen.getByText(MOCK_BOOK.volumeInfo.authors.join(', '));
    const description = screen.getByText(MOCK_BOOK.volumeInfo.description);

    expect(img.getAttribute('src')).toBe(
      MOCK_BOOK.volumeInfo.imageLinks.thumbnail,
    );
    expect(title).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
