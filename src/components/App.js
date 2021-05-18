import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ArticlePage } from "../pages/ArticlePage";
import { ArticlesListPage } from "../pages/ArticlesListPage";
import { NavBar } from "./NavBar";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/articles-list" component={ArticlesListPage} exact />
            <Route path="/article/:name" component={ArticlePage} exact />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
