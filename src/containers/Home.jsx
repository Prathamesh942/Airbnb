import React from "react";
import Header from "../components/Home/Header";
import Filter from "../components/Home/Filter";
import Cards from "../components/Home/Cards";
import Footer from "../components/Home/Footer";

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
