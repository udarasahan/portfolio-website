import './Header.css';
import headerImage from '../../assets/header-image-1.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Heder = () => {
  return (
    <div className='header' id='home'>
      <img src={headerImage} alt="" />
      <h1><span>I&apos;m Udara Sahan,</span> Full Stack Developer.</h1>
      <p>I enjoy building dynamic and user friendly web applications and 
        solving challenging problems. I pay close attention to 
        detail and prioritize creating great user experiences. 
        I am dedicated to delivering high-quality solutions and excited 
        to contribute to innovative projects and work with like-minded professionals.</p>
      <div className="header-action">
        <div className="header-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='header-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Heder