import './MyWork.css';
import MyWork_Data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.png';

const MyWork = () => {
  return (
    <div className="mywork" id='work'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {MyWork_Data.map((work,index)=> {
                return <div key={index} className="mywork-format">
                    <img src={work.w_image} alt="" />
                    <h2 className="image-header">{work.w_name}</h2>
                </div>
            })}
        </div>
    </div>
  )
}

export default MyWork