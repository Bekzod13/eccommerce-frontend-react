import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const MainRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog/>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default MainRoutes;
