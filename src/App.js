import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
export class App extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    console.log("hello from news components");
    this.state = {
      country:"in"
    }
    // let data = fetch('https://localhost:7053/api/book/GetAllBookAsync');
    // let parsedData= data.json();
    // console.log(parsedData);
  }
   pagesize=15;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/" 
              element={<News key="general" pageSize={this.pagesize} country="in" category="general" />}
            ></Route>

            <Route
              exact
              path="/business" 
              element={<News  key="business" pageSize={this.pagesize} country="in" category="business" />}
            ></Route>

            <Route
              exact
              path="/entertainment" 
              element={<News  key="entertainment" pageSize={this.pagesize}country="in" category="entertainment" />}
            ></Route>

            <Route
              exact
              path="/health" 
              element={<News  key="health" pageSize={this.pagesize}country="in" category="health" />}
            ></Route>

            <Route
              exact
              path="/science" 
              element={<News key="science" pageSize={this.pagesize} country="in" category="science" />}
            ></Route>

            <Route
              exact
              path="/sports" 
              element={<News key="sports" pageSize={this.pagesize} country="in" category="sports" />}
            ></Route>
             <Route
              exact
              path="/technology" 
              element={<News key="technology" pageSize={this.pagesize} country="in" category="technology" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
