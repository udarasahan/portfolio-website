import './Header.css';
import headerImage from '../../assets/header-image-2.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Heder = () => {
  return (
    <div className='header' id='home'>
      <img src={headerImage} alt="" />
      <h1><span>I&apos;m Udara Sahan,</span> Full Stack Developer.</h1>
      <p>Creating dynamic and user-friendly web applications and solving challenging problems 
        are at the core of my professional focus. I pay close attention to detail and prioritize 
        creating great user experiences. I am dedicated to delivering high-quality solutions 
        and excited to contribute to innovative projects and work with like-minded professionals.</p>
      <div className="header-action">
        <div className="header-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='header-resume'>
            <a href="https://drive.google.com/file/d/1Hv_vSNJxCPR_N8aaJFlCGvQHvL735xpt/view?usp=sharing" target="_blank">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Heder