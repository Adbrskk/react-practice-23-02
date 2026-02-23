import React from "react";
import { UserProvider } from "./context/UserContext";
import MainComponent from "./components/MainComponent";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
}

export default App;