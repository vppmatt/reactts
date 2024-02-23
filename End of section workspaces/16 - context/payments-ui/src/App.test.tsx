import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./data/DataFunctions', () => {})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Payments Application");
  expect(linkElement).toBeInTheDocument();
});
