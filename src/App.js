import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';
import menu from './components/menu.json';
import { handleChange } from "./handleChange";
import './App.css';

function App() {
  handleChange(menu);
  return (
    <Router basename="/">
      <Navbar />
    </Router>   
  );
}

export default App;