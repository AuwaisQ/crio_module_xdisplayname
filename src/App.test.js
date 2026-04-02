import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Full Display Name heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Full Display Name!/i);
  expect(headingElement).toBeInTheDocument();
});

