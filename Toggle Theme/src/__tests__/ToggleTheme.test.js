import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleTheme from '../components/ToggleTheme';

test('renders toggle button and switches label when clicked', () => {
  const handleToggle = jest.fn();
  render(<ToggleTheme isDark={false} onToggle={handleToggle} />);

  const button = screen.getByRole('button', { name: /toggle theme/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('🌞 Light Mode');

  fireEvent.click(button);
  expect(handleToggle).toHaveBeenCalledWith(true);
});
