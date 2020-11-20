import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Wrapper from "./components/wrapper/wrapper";




function App() {
  return (
    <div className="App">
      <div className="body">
        <Wrapper>
          <Header/>
          <Main/>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
