import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <div>
      <Container maxWidth="md">
        <div className="content">
          <div className="downloadMessage">
            <span className="downloadText">
              For the best experience use inshorts app on your smartphone
            </span>
            <img
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              alt="app store"
            />
            <img
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              alt="play store"
            />
          </div>

          {newsArray.map((news) => (
            <NewsCard news={news} key={news.title} />
          ))}

          {loadMore <= 20 && (
            <>
              <button className="loadMore" onClick={()=> setLoadMore(loadMore + 20)}>Load More</button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NewsContent;
