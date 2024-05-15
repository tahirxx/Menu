
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './Home';
import MenuPage from './MenuPage';
import './App.css'; // Don't forget to import your CSS file here
import Nav from './Nav';
export default function App() {
  return (
    <Router>
      <div>
       <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      </div>
    </Router>
  );
}


