import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { Default } from 'components/atoms/Button/index.stories';

it('renders the button in the default state', () => {
  render(<Default />);
  expect(screen.getByRole('button')).toHaveTextContent('Hello');
});
