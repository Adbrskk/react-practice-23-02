import React from "react";
import { UserProvider } from "./context/UserContext";
import MainComponent from "./components/MainComponent";
import "./styles/app.css";

function App() {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
}

export default App;