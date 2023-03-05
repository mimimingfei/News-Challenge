import axios from "axios";

export const getNews = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_DATA_SERVICE_URL); 
    return response;
  } catch (e) {
    return { error: "Error" };
  }
};
