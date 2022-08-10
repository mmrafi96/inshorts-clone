import React from "react";
import "./NewsCard.css";
const NewsCard = ({ news }) => {
 // console.log(news);
  return (
    <div className="newsCard">
      <img
        src={
          news.urlToImage
            ? news.urlToImage
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozOoUPoqC5W-Ox8t6lc-1Pu8YTuC7J21LkKgGMY6n&s"
        }
        alt={news.title}
      />
      <div className="newsContents">
        <p className="headline">{news.title}</p>
        <p>Short by {news.author ? `${news.author}` : 'Unknown'}</p >
        <p>{news.description}</p>
        <a className="newslink" target="_blank" href={news.url}>Read more at {news.source.name}</a>
      </div>
    </div>
  );
};

export default NewsCard;
