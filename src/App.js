import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>


    //<Header />
    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<Dashboard />}>
    //     </Route>
    //   </Routes>
    // </Router>
    // <Footer />
  );
}

export default App;
