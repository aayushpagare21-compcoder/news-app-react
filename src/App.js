import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsComponent key="home" category="general" heading="News-Home"/>}></Route>
            <Route exact path="/business"  element={<NewsComponent key="business" category="business" heading="News-Business"/>}> </Route> 
            <Route exact path="/entertainment"  element={<NewsComponent key="entertainment" category="entertainment" heading="News-Entertainment"/>}> </Route> 
            <Route exact path="/sports"  element={<NewsComponent key="sports" category="sports" heading="News-Sport"/>}> </Route> 
            <Route exact path="/general"  element={<NewsComponent key="general" category="general" heading="News-General"/>}> </Route> 
            <Route exact path="/science"  element={<NewsComponent key="science" category="science" heading="News-Science"/>}> </Route> 
            <Route exact path="/health"  element={<NewsComponent key="healt" category="health" heading="News-Health"/>}> </Route> 
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
