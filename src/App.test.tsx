import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sample', () => {
    render(<App />);
    const linkElement = screen.getByText(/Sample/i);
    expect(linkElement).toBeInTheDocument();
});
