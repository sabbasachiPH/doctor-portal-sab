import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoute from "./Component/Nav/MyRoute";
import { AuthContextProvider } from "./Component/Forms/useAuth";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <MyRoute />
        </Router>

        {/* <button onClick={handleText}> Button one</button>
      <button onClick={handleText}> Button 1</button>
      <button onClick={handleText}> Button 2</button>
      <button onClick={handleText}> Button 3</button>
      <button onClick={handleText}> Button 4</button>
      <button onClick={handleText}> Button 5</button>
      <p id="par"></p> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
