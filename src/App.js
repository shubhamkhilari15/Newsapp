import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App =()=> {
  const pageSize=15;
  const country="us";
  const [progress,setProgress]=useState()
  const apiKey=process.env.REACT_APP_NEWS_API

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route
              exact
              path="/" 
              element={<News progress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}
            ></Route>

            <Route
              exact
              path="/business" 
              element={<News progress={setProgress}  apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />}
            ></Route>

            <Route
              exact
              path="/entertainment" 
              element={<News progress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={pageSize}country={country} category="entertainment" />}
            ></Route>

            <Route
              exact
              path="/health" 
              element={<News progress={setProgress}  apiKey={apiKey} key="health" pageSize={pageSize}country={country} category="health" />}
            ></Route>

            <Route
              exact
              path="/science" 
              element={<News progress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />}
            ></Route>

            <Route
              exact
              path="/sports" 
              element={<News progress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />}
            ></Route>
             <Route
              exact
              path="/technology" 
              element={<News progress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;
