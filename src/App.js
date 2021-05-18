import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesList } from "./pages/ArticlesList";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/articles-list" component={ArticlesList} exact />
          <Route path="/article-page" component={ArticlePage} exact />

        </div>
      </Router>
    );
  }
}

export default App;
