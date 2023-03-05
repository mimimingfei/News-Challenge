import axiosMock from 'axios';
import { getNews } from './getNews.js';

jest.mock('axios');

describe('getNews tests', () => {
  test('Test 1 should return right data', async () => {
    const data = [{ id: 1, fields: { thumbnail: 'https://media.guim.co.uk/6e6c210fb5c9f3dbc40f317a82ec804baf553bc8/0_0_6302_3783/500.jpg', headline: 'Test headline' } }];
    axiosMock.get.mockResolvedValueOnce(data);
    await getNews();
    expect(axiosMock.get).toHaveBeenCalledWith(process.env.REACT_APP_DATA_SERVICE_URL);
  });


  test('Test 2 should return error', async () => {
    axiosMock.get.mockRejectedValueOnce({ error: `Error` });
    const result = await getNews();
    expect(result).toEqual({ error: `Error` });
  });

  test('Test 3 should return right data', async () => {
    const data = [{ id: 1, fields: { thumbnail: 'https://media.guim.co.uk/6e6c210fb5c9f3dbc40f317a82ec804baf553bc8/0_0_6302_3783/500.jpg', headline: 'Test headline' } }];
    axiosMock.get.mockResolvedValueOnce(data);
    const result = await getNews();
    expect(result).toBe(data);
  })

});
