import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

// Program pages are split into their own chunks; Layout provides the Suspense boundary.
const LearningClass = lazy(() => import("./pages/Programs/LearningClass"));
const StrengtheningClass = lazy(
  () => import("./pages/Programs/StrengtheningClass"),
);
const RoboticsSTEAM = lazy(() => import("./pages/Programs/RoboticsSTEAM"));
const PictureBook = lazy(() => import("./pages/Programs/PictureBook"));
const ArtCraft = lazy(() => import("./pages/Programs/ArtCraft"));
const EnglishEnrichment = lazy(
  () => import("./pages/Programs/EnglishEnrichment"),
);

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
            <Route path="robotics-steam" element={<RoboticsSTEAM />} />
            <Route path="english-enrichment" element={<EnglishEnrichment />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
