import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.png';
import call from '../../assets/call.png';
import mail from '../../assets/mail.png';
import location from '../../assets/location.png';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b164ebb1-e8bd-4175-a1ba-ce5333de3bf1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message)
        }
      };

  return (
    <div className="contact" id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let&apos;s talk</h1>
                <p>I&apos;m currently available and seeking an internship in Software Engineering. 
                    Nearing the completion of my degree in Physical Science with a focus on Mathematics 
                    and Computer Science, I have a solid foundation in coding and software development. 
                    I am eager to apply my skills, contribute to real projects, and learn from experienced 
                    professionals. Passionate about technology, I am excited to bring my enthusiasm and 
                    dedication to a dynamic team.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" /> <p>udarasahanj@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" style={{backgroundColor: '#B415FF'}} /> <p>076 94 17 607   /   076 62 70 836</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /> <p>Mulatiyana, Agalawatta</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message' id=""></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact