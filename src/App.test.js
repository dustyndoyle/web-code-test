import { render, screen } from '@testing-library/react';
import App from './App';
import StockProductsData from './data/stockProducts.json';

test('app renders', () => {
  render(<App />);
  const appTitle = screen.getByText(/Restaurant Order System/i);
  expect(appTitle).toBeInTheDocument();
});
