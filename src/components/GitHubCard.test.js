import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GitHubCard from './GitHubCard';

test('renders GitHubCard correctly', () => {
  const username = 'Darius';
  const imageUrl = '/public/DariusShooting';
  const bio = 'Ball is Life';
  
  const { container } = render(<GitHubCard username={username} imageUrl={imageUrl} bio={bio} />);
  
  expect(container.firstChild).toMatchSnapshot();
});