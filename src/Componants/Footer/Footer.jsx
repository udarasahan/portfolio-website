import './Footer.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
            <AnchorLink className='anchor-link' offset={50} href='#navbar'><img src={logo} alt="" /></AnchorLink>
            </div>
            <div className="footer-top-right">
                <div className="footer-media-links">
                     <a href="https://www.linkedin.com/in/udara-sahan-57421a1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={linkedin} alt="" /></a>
                     <a href="https://github.com/udarasahan" target='_blank'><img src={github} alt="" /></a>
                     <a href="https://www.instagram.com/don_jay____47?igsh=ZGdyeTltbThoaDNw" target='_blank'><img src={instagram} alt="" /></a>
                     <a href="https://www.facebook.com/udarasahan.mikoyan?mibextid=ZbWKwL" target='_blank'><img src={facebook} alt="" /></a>
                </div>
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