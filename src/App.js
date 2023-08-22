import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general" />}></Route>
          <Route exact path="/Sports" element={<News key="sports" pageSize={6} country="in" category="Sports" />}></Route>
          <Route exact path="/Business" element={<News key="Business" pageSize={6} country="in" category="Business" />}></Route>
          <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={6} country="in" category="Entertainment" />}></Route>
          {/* <Route exact path="/Technology" element={<News key="Technology" pageSize={6} country="in" category="/Technology" />}></Route> */}
          <Route exact path="/Science" element={<News key="Scinece" pageSize={6} country="in" category="Science" />}></Route>
          <Route exact path="/Health" element={<News key="Health" pageSize={6} country="in" category="Health" />}></Route>
        </Routes>
      </div>
    );
  }
}
