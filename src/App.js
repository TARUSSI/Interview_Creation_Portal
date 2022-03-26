// import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (   
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
