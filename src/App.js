import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Home from './pages/home/home.view';
import Cat from './pages/cat/cat.view';
import Error from "./pages/error/error.view"
import { AnimalListProvider } from './contexts/cat.context';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const App = () => {
  return (
    <div className="App bg-dark">
      <AnimalListProvider>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Cat />} />
              <Route path='*' element={<Error errorcode={"[404] Page Not Found!"} />} />
          </Routes>
        </Router>
      </AnimalListProvider>
    </div>
  );
}

export default App;