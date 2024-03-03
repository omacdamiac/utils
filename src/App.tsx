import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./views/pages/dashboard/Dashboard";
import { About, Details, Home } from "./views/pages";
import { Layout } from "./views/ui";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
            <Route path="/details" element={<Details />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
