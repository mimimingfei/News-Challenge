import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import * as Data from './Utils/getNews';

jest.mock('./Utils/getNews');

describe("App component tests", () => {
  test("Test 1 should call getNews when calling useEffect", async () => {
    const testData = [{ fields: { headline: 'headline', thumbnail: 'thumbnail' } }];
    Data.getNews.mockResolvedValue(testData);
    render(<App />);
    await waitFor(() => expect(Data.getNews).toHaveBeenCalled());
  });


  test("Test 2 show No data to display when error occurs", async () => {
    Data.getNews.mockImplementation(() => { error: `Error` });
    render(<App />);
    const message = await screen.findByText(/No Data to display/i);
    expect(message).toBeInTheDocument();
  });

  test("Test 3 should display headlines", async () => {
    const testHeadlines = [{ id: '1', fields: { headline: 'headline1', thumbnail: 'thumbnail1' } },
    { id: '2', fields: { headline: 'headline2', thumbnail: 'thumbnail2' } }];
    Data.getNews.mockImplementation(() => Promise.resolve({ data: { response: { results: testHeadlines } } }));
    render(<App />);
    const headline1 = await screen.findByText(/headline1/i);
    const headline2 = await screen.findByText(/headline2/i);

    expect(headline1).toBeInTheDocument();
    expect(headline2).toBeInTheDocument();
  });

});
