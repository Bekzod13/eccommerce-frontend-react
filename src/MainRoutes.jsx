import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';

const MainRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </>
  );
}

export default MainRoutes;