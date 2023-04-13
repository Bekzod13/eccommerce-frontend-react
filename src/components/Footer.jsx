import {Link} from 'react-router-dom';

// import icons
import {BsFacebook, BsInstagram, BsTelegram, BsTiktok} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
        <div className="container footer">
            <div className="footer-left">
                <div className="footer-part">
                    <h3>Documents</h3>
                    <Link to={'/'} className="footer-link">All conditions</Link>
                    <Link to={'/'} className="footer-link">Offers</Link>
                    <Link to={'/'} className="footer-link">Roles</Link>
                    <Link to={'/'} className="footer-link">Certificate</Link>
                </div>
                <div className="footer-part">
                    <h3>Services</h3>
                    <Link to={'/'} className="footer-link">Shops</Link>
                    <Link to={'/'} className="footer-link">About</Link>
                    <Link to={'/'} className="footer-link">Partners</Link>
                    <Link to={'/'} className="footer-link">Promocode</Link>
                </div>
                <div className="footer-part">
                    <h3>Catalogs</h3>
                    <Link to={'/'} className="footer-link">Catalog</Link>
                    <Link to={'/'} className="footer-link">Catalog</Link>
                    <Link to={'/'} className="footer-link">Catalog</Link>
                    <Link to={'/'} className="footer-link">Catalog</Link>
                </div>
            </div>
            <div className="footer-right">
                <h3>Information</h3>
                <Link to={'/'} className="footer-link">contact.@nextstore.uz</Link>
                <Link to={'/'} className="footer-link">
                    +998 97 712 96 96
                        <br />
                    +998 95 503 09 09
                </Link>
                <Link to={'/'} className="footer-link">Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</Link>
                <div className="footer-social-medias">
                    <a className='footer-social-media' href="https://www.facebook.com/">
                        <BsFacebook/>
                    </a>
                    <a className='footer-social-media' href="https://www.instagram.com/">
                        <BsInstagram/>
                    </a>
                    <a className='footer-social-media' href="https://telegram.org/">
                        <BsTelegram/>
                    </a>
                    <a className='footer-social-media' href="https://www.tiktok.com/">
                        <BsTiktok/>
                    </a>
                </div>
            </div>
        </div>
        <div className="container footer-bottom">
            &copy; CopyRighted by Bekzod Sharobiddinov
        </div>
    </footer>
  );
}

export default Footer;
