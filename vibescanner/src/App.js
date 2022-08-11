import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar"
import About from "./pages/About"
import Home from "./pages/Home"
import MyVibeGraph from './pages/MyVibeGraph'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myVibeGraph' element={<MyVibeGraph />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;