import { Link } from 'react-router-dom';

// import images
import logo from '../assets/images/Logo.png';

// import icons
import {HiOutlineBars3} from 'react-icons/hi2';
import {HiOutlineSearch, HiOutlineHeart, HiOutlineShoppingCart} from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav>
        <header className="container">
            <div className="nav-left">
                <Link className='nav-logo' to={'/'}>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="nav-catalog">
                    <span>
                        <HiOutlineBars3/>
                    </span>
                    <h4>Katalog</h4>
                </div>
            </div>
            <div className="nav-middle">
                <input type="text" placeholder='Maxsulot izlash' />
                <div className="nav-search-btn">
                    <HiOutlineSearch/>
                </div>
            </div>
            <div className="nav-right">
                <Link to={'/'} className="nav-icon">
                    <HiOutlineHeart/>
                </Link>
                <Link to={'/'} className="nav-icon">
                    <HiOutlineShoppingCart/>
                </Link>
                <Link to={'/'} className="login-btn">
                    Kirish
                </Link>
            </div>
        </header>
    </nav>
  );
}

export default Navbar;
