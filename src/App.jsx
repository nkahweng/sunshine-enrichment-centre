import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LearningClass from "./pages/Programs/LearningClass";
import StrengtheningClass from "./pages/Programs/StrengtheningClass";
import RoboticsSTEAM from "./pages/Programs/RoboticsSTEAM";
import PictureBook from "./pages/Programs/PictureBook";
import ArtCraft from "./pages/Programs/ArtCraft";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="programs">
            <Route path="learning-class" element={<LearningClass />} />
            <Route
              path="strengthening-class"
              element={<StrengtheningClass />}
            />
            <Route path="art-craft" element={<ArtCraft />} />
            <Route path="picture-book" element={<PictureBook />} />
            <Route path="robotic-steam" element={<RoboticsSTEAM />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
