import React from "react";
import "./App.css";
import TweetContainer from "./components/TweetContainer";

function App() {
  return (
    <>
      <TweetContainer status="Twitter Clone" />

      <TweetContainer status="Facebook Clone" />

      <TweetContainer status="Snapchat Clone" />
    </>
  );
}

export default App;
