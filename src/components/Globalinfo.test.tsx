import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalInfo from './GlobalInfo';
import '@testing-library/jest-dom'

test('Check if title is correct', () => {
    render(<GlobalInfo newConfirmed={0} newDeaths={0} newRecovered={0} />);
    const linkElement = screen.getByText(/Global Covid-19 data/i);
    expect(linkElement).toBeInTheDocument();
  });
  