import React from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Home/Header/Header";
import Typography from "./utils/typography";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Typography />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
