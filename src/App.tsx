import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./views/ui/layout/Layout";
import About from "./views/pages/about/About";
import { Dashboard } from "./views/pages/dashboard/Dashboard";
import Home from "./views/pages/home/Home";
import Details from "./views/pages/details/details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
