import { render } from '@testing-library/react';
import React from 'react';
import Headlines from './Headlines.jsx';


describe('Headlines tests', () => {
    it('Test 1 should render news articles', () => {
      const props = {
        data: [
          {
            id: 1,
            fields: {
              thumbnail: 'https://media.guim.co.uk/6e6c210fb5c9f3dbc40f317a82ec804baf553bc8/0_0_6302_3783/500.jpg',
              headline: 'Test headline 1',
            },
          },
          {
            id: 2,
            fields: {
              thumbnail: 'https://media.guim.co.uk/247ef32c1194f34fdfd8dd4b0c52039eafae5caf/0_0_3862_2318/500.jpg',
              headline: 'Test headline 2',
            },
          },
        ],
      };
      const { getByAltText, getByText } = render(<Headlines {...props} />);
      expect(getByAltText('Thumbnail 1')).toBeInTheDocument();
      expect(getByAltText('Thumbnail 2')).toBeInTheDocument();
      expect(getByText('Test headline 1')).toBeInTheDocument();
      expect(getByText('Test headline 2')).toBeInTheDocument();
    });

    it('Test 2 should render a loading message when data is not available', () => {
        const { getByText } = render(<Headlines />);
        expect(getByText('News are loading...')).toBeInTheDocument();
      });
  });
  