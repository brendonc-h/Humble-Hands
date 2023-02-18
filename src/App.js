import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Prework from "./components/Prework";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="">
      <Navbar/>
      <About/>
      <Prework/>
      <Services/>
      <Contact/>
    </main>
  );
}





