import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
    

    <div className='main-footer'>

    <div className='footertop'>
      <div className="cities">We are available in the cities &gt; 
    </div>
     
         
    <div className="sec2">
         <Link to="/city/kota"><div className="box">KOTA</div></Link>
         <Link to="/city/DM"><div className="box">DELHI-MUKHARJINAGAR</div></Link>
         <Link to="/city/varanasi"><div className="box">VARANASI</div></Link>
         <Link to="/city/DR"><div className="box">DELHI-RAJINDERNAGAR</div></Link>
         <Link to="/city/ranchi"><div className="box">RANCHI</div></Link>
         <Link to="/city/patna"><div className="box">PATNA</div></Link>
         <Link to="/city/surat"><div className="box">SURAT</div></Link>
         <Link to="/city/pune"><div className="box">PUNE</div></Link>
         <Link to="/city/mumbai"><div className="box">MUMBAI</div></Link>
    </div>

    </div>

        <div className=" container">
            <div className="row">
               
                {/* col1 */}
                <div className="col">
                  <h1>Company</h1>
                  
                    <Link to="about"><p>About Us</p></Link>
                    <Link to="privacy"><p>Privacy Policy</p></Link>
                    <Link to="tandc"><p>Terms and Conditions</p></Link>
             
                             
                </div>

                {/* col2 */}
                <div className="col">
                <h1>Jobs and Career</h1>
                
                  <Link to="dev"><p>Developer (Android, Web, ML Expert)</p></Link>
                  <Link to="graphic"><p>Graphic Designer</p></Link>
                  <Link to="contentwriter"><p>Content Writer</p></Link>
                  <Link to="digmark"><p>Digital Marketing Expert</p>  </Link>           
                       
                </div>

                {/* col3 */}
                <div className="col">
                  <h1>Help and Support</h1>
                  
                    <Link to="customer"><p>Customer Care Support</p></Link>
                    <Link to="course-issue"><p>Course Issue</p></Link>
                    <Link to="tiffincom"><p>Tiffin Service complaint</p></Link>
             
                             
                </div>
            </div>

            <div className='row'>

            <div className="col">
                  <h1>Company</h1>
                  <Link to="office-culture"><p>Office Culture</p></Link>
                  <Link to="corp"><p>Samaadhaan Corporate</p></Link>                              
                </div>

                {/* col2 */}
                <div className="col">
                <h1>Our App</h1>
                
                <Link to="user-app"><p>Saamadhaan User App</p></Link> 
                <Link to="chef-app"><p>Chef App & Website</p></Link>
                <Link to="tiff-app"><p>Tiffin Wala App & Website</p></Link>
                
                         
                </div>

                {/* col3 */}
                <div className="col">
                  <h1>Follow Us</h1>
                  <Link to="instagram"><p>Instagram</p></Link>
                  <Link to="https://www.linkedin.com/company/samaadhaanfoodtech/"><p>LinkedIn</p></Link>
                  <Link to="youtube"><p>Youtube</p></Link>
                  <Link to="facebook"><p>Facebook</p></Link>  
                
                  
                  
                  
             
                              
                </div>
            </div>

            {/* <br></br> */}
            <hr/>
            <br></br>
           <div className='footer-below'>
            <div className="footer-copyr">
                <p>&copy; All copyrights reserved by Samadhaan</p>
                
           </div>

       
        <div className="footer-bel-links">
            <Link to="/disclaimer"><div ><p>Disclaimer</p></div></Link>
            <Link to="/tandc"><div><p>Terms and Conditions</p></div></Link>
            <Link to="/privacy"><div><p>Privacy Policy</p></div></Link>
        </div>
    </div>
    </div>

    </div>

    </>
  )
}

export default Footer