import React, { useState } from "react";
import Header from "../components/Home/Header";
import Filter from "../components/Home/Filter";
import Cards from "../components/Home/Cards";
import Footer from "../components/Home/Footer";
import Login from "./Login";
import Signup from "./Signup";

function Home() {
  const [query, setQuery] = useState('');
  console.log(query);
  return (
    <div>
      <Header setQuery={setQuery}/>
      <Filter />
      <Cards query={query}/>
      <Footer />
    </div>
  );
}

export default Home;
