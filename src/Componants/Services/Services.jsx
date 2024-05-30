import './Services.css';
import arrowImage from '../../assets/arrow.png';
import Services_Data from '../../assets/services_data';
import theme_pattern from '../../assets/theme_pattern.png';

const Services = () => {
  return (
    <div className="services" id='services'>
        <div className="services-title">
            <h1>My services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="service-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrowImage} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services