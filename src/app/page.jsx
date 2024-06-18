import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import TicTacToe from "./components/Tic";
import Sudoku from "./components/Sudoku";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Projects />
      <Sudoku />
      <TicTacToe />
      <Footer />
      <Analytics />
    </>
  );
};

export default Home;
