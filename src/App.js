import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export class App extends Component {
  
 
  constructor() {
    super();
    console.log("hello from news components");
    this.state = {
      country:"us",
     pageSize:15,
     progress:10
    }
  }
  apiKey=process.env.REACT_APP_NEWS_API
  setProgress=(progress)=>{
 this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route
              exact
              path="/" 
              element={<News progress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.state.pageSize} country={this.state.country} category="general" />}
            ></Route>

            <Route
              exact
              path="/business" 
              element={<News progress={this.setProgress}  apiKey={this.apiKey} key="business" pageSize={this.state.pageSize} country={this.state.country} category="business" />}
            ></Route>

            <Route
              exact
              path="/entertainment" 
              element={<News progress={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize={this.state.pageSize}country={this.state.country} category="entertainment" />}
            ></Route>

            <Route
              exact
              path="/health" 
              element={<News progress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={this.state.pageSize}country={this.state.country} category="health" />}
            ></Route>

            <Route
              exact
              path="/science" 
              element={<News progress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.state.pageSize} country={this.state.country} category="science" />}
            ></Route>

            <Route
              exact
              path="/sports" 
              element={<News progress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.state.pageSize} country={this.state.country} category="sports" />}
            ></Route>
             <Route
              exact
              path="/technology" 
              element={<News progress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.state.pageSize} country={this.state.country} category="technology" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
