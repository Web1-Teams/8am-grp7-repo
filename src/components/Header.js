import img1 from '../img/imgl.jpg'
import'./Header.css'
    


const Header=()=>{
    return (
      <div>
      <div className="Navbar">
        {/* img and project Name */}
        <div className="logo">
          <img src={img1} alt="Logo" /> {/* Logo image */}
          <span>Eduminute</span> {/* project name */}
        </div>


        <div className="nav-links-container">
       
          <div className="nav-links">
            <a href="Home">Home</a>
            <a href="#Challenges">Challenges</a>
            <a href="#Education">Education</a>
            <a href="#Contact">Contact</a>
           
          </div>
        </div>
      </div>
    </div>
   
    )
}
export default Header; 

