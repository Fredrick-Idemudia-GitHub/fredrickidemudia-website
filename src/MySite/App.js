import React from "react";
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { container } from "react-bootstrap";
import './App.css'
import Home from "./Home"
import Resume from "./Resume";
import Contacts from "./Contacts";
import Github from "./Github";
import NotFoundPage from "./PageNotFound";
import Layout from "./Layout";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="github" element={<Github />} />
        <Route path="downloadcv" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
  
export default App;
