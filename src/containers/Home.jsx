import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Cards from "../components/cards";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Filter />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
