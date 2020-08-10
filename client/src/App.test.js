import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders Search box text', () => {
  const { getByPlaceholderText } = render(<App />);
  const linkElement = getByPlaceholderText(/type your search here/i);
  expect(linkElement).toBeInTheDocument();
});
