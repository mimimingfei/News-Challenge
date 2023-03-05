import "./App.css";
import { useEffect, useState } from "react";
import { getNews } from "./Utils/getNews.js";
import Headlines from "./Components/Headlines.jsx";


function App() {
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(false); 
  
    async function getData() {
      try {
        const allNews = await getNews();
         console.log('allNews:', allNews);
        const news = allNews.data.response.results.map((article) => ({
          ...article,
          id: encodeURIComponent(article.id),
        }));
        setHeadlines(news);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
      
    useEffect(() => { getData() }, []);
  
    return (
      <div className="App">
        <h1>News Challenge</h1>
        <hr />
        {error && <h2>No data to display</h2>}
        {!error && <Headlines data={headlines}/>}
        <hr />
      </div>
    );
  }
export default App;
