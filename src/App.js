import './App.css';
import Header from './Pages/Home/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Footer from './Pages/Home/Footer';
import Services from './Pages/Home/Services';
import Reviews from './Pages/Home/Reviews';
import Signup from './Pages/Home/Signup';
import Signin from './Pages/Home/Signin';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
