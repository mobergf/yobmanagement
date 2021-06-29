import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <div>
      <div>
        <div
          className="uk-child-width-1-1 uk-child-width-1-3@l uk-child-width-1-2@s uk-grid-match"
          data-uk-grid
        >
          {articles.map((article, i) => {
            return (
              <Card article={article} key={`article__left__${article.slug}`} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
