
import { Link } from 'react-router-dom';
import './App.css';

export default function Home() {
  return (
    <div className="home-container" >
        
    <div className='image-grid'>
    <video src="../public/Savory Bites.mp4" className='video' autoPlay loop muted playsInline />

        {/* <img src="../public/images/pexels-daniel-yampolschi-3656014-6463751.jpg" alt="" className='img1'/>
        <img src="../public/images/pexels-elevate-1267696.jpg" alt="" className='img2'/>
        <img src="../public/images/pexels-brett-sayles-1115251.jpg" alt="" className='img3'/> */}
        {/* <img src="../public/images/pexels-olly-761854.jpg" alt="" className='img4'/> */}
    {/* <h1 className='home-title'>Welcome to SavorBite!</h1> */}
    </div>
    
      <div className="content ">
              
        <p className='home-p'>Discover our delicious menu and specialties.</p>
        <Link to="/menu" className="btn">
          View Menu
        </Link>
      </div>
    </div>
  )
}





