import React from "react";
import { ArticlesList } from "../components/ArticleList";
import articleContent from "./article-content";

export const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <h1>Article does not exist!</h1>;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ArticlesList articles={otherArticles} />
    </React.Fragment>
  );
};
