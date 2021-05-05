import { render, screen } from '@testing-library/react';
import App from './App';

test('renders three.js canvas', () => {
  const { container } = render(<App />);
  const canvas = container.querySelector('canvas');
  expect(canvas).not.toBeUndefined();
});
