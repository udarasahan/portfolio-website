import './About.css';
import aboutImage from '../../assets/aboutme-image.jpeg';
import theme_pattern from '../../assets/theme_pattern.png';

const ABout = () => {
  return (
    <div className="about" id='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={aboutImage} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I enjoy building interactive and user friendly web applications 
                    and solving tough problems. I focus on detail and aim to create 
                    great user experiences. I&apos;m committed to delivering quality 
                    solutions and excited to work on innovative projects with others.</p>
                <p>Working with a team enhances my abilities, and I&apos;    m always eager to 
                    learn new technologies and improve my skills. My goal is to 
                    contribute effectively to any team and bring fresh ideas to every project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>MySQL & NoSQL</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"7%"}} /></div>
                    <div className="about-skill"><p>Kotlin</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>C#</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default ABout