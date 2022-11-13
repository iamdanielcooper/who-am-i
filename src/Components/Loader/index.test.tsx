import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

test('renders Loading text', () => {
    render(<Loader />);
    const loadingText = screen.getByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();
});
