import React from "react";
import { ArticlesList } from "../components/ArticleList";
import articleContent from "./article-content";

export const ArticlesListPage = () => {
  return (
    <React.Fragment>
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </React.Fragment>
  );
};
