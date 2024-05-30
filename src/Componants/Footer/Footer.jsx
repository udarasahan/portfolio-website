import './Footer.css';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
            <AnchorLink className='anchor-link' offset={50} href='#navbar'><img src={logo} alt="" /></AnchorLink>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                     <img src={user} alt="" />
                     <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Udara Sahan. All Rights Reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Contact with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer