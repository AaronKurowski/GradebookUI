import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.jsx';
import Design from './Components/Design/Design.jsx';

function App() {
  return (
    <div id="main-wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/classes" element={<Classes />}></Route> */}
        {/* <Route path="/grade" element={<Grade />}></Route> */}
        <Route path="/design" element={<Design />}></Route>
      </Routes>
    </div>
  );
}

export default App;