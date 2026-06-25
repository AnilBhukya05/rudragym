import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Home      from "./pages/Home";
import About     from "./pages/About";
import Programs  from "./pages/Programs";
import Pricing   from "./pages/Pricing";
import Trainers  from "./pages/Trainers";
import Gallery   from "./pages/Gallery";
import Contact   from "./pages/Contact";

export default function App() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/pricing"  element={<Pricing />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gallery"  element={<Gallery />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}