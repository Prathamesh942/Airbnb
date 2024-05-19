import React, { useState } from "react";
import Header from "../components/Home/Header";
import Filter from "../components/Home/Filter";
import Cards from "../components/Home/Cards";
import Footer from "../components/Home/Footer";
import Login from "./Login";
import Signup from "./Signup";

function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  console.log(category);
  console.log(query);
  return (
    <div>
      <Header setQuery={setQuery}/>
      <Filter setCategory={setCategory} />
      <Cards query={query} category={category} setQuery={setQuery} setCategory={setCategory}/>
      <Footer />
    </div>
  );
}

export default Home;
