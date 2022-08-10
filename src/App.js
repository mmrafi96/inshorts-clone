import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInShorts from "./components/NavInShorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apiKey from "./data/config";
function App() {
  const [category, setCategory] = useState("");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore]=useState(20);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(response.data.articles);
      setNewsResults(response.data.totalResults);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(category);
 console.log("loadmore", loadMore);
   console.log(newsArray);
   console.log(newsResults);
  useEffect(() => {
    newsApi();
     // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
      <NavInShorts setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setLoadMore={setLoadMore}/>
      <Footer />
    </div>
  );
}

export default App;
