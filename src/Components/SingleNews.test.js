import { render } from '@testing-library/react';
import React from 'react';
import SingleNews from './SingleNews.jsx';

describe('SingleNews tests', () => {
  const props = {
    thumbnail: 'https://media.guim.co.uk/6e6c210fb5c9f3dbc40f317a82ec804baf553bc8/0_0_6302_3783/500.jpg',
    headline: 'Test headline'
  };

  it('Test 1 should render image and headline', () => {
    const { getByAltText, getByText } = render(<SingleNews {...props} />);
    expect(getByAltText('500.jpg')).toBeInTheDocument();
    expect(getByText('Test headline')).toBeInTheDocument();
  });
  
});
