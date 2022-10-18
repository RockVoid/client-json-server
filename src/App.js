import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Register from "./pages/Register";
import Footer from "./components/ui/Footer";
  
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
