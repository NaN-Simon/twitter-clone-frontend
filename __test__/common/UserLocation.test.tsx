/* eslint-disable react/display-name */

import { render, screen } from '@testing-library/react'
import UserLocation from '@/../src/common/UserLocation'

jest.mock('@/assets/icons/Location.svg', () => () => <svg>Location SVG</svg>);


test('renders user location', () => {
  render(<UserLocation userLocation="New York" />);
  const userLocationElement = screen.getByText(/New York/i);
  expect(userLocationElement).toBeInTheDocument();
});

test('renders Location SVG', () => {
  render(<UserLocation userLocation="New York" />);
  const locationSvgElement = screen.getByText(/Location SVG/i);
  expect(locationSvgElement).toBeInTheDocument();
});