import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the bootcamp description', () => {
  render(<App />);
  const linkElement = screen.getByText(/Esta es la app del Bootcamp/i);
  expect(linkElement).toBeInTheDocument();
});
