import { FaGithub, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer =()=>{
    return(
        <section className="Footer">
            <div className="container">
                <div className='row'>
                <div className="col-lg-3 col-md-6 col-sm-6">

                        <h2>E-Commerce</h2>
                        
                        
                        <div className="image">
                        <div className="follow">
                        <h3>to follow us or communicate</h3>
                        </div>
                           <div className='ul'>
                           <li><a href="https://www.facebook.com/profile.php?id=100041785385858" target='blank' rel='noopener noreferrer'> <FaFacebookF className='icon'/></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100041785385858" target='blank' rel='noopener noreferrer'> <FaXTwitter  className='icon'/></a></li>
                                <li><a href="https://github.com/mahmoud-mohameed" target='blank' rel='noopener noreferrer'> <FaGithub  className='icon'/></a></li>
                                <li><a href="https://wh.ms/201121775618" target='blank' rel='noopener noreferrer'> <FaPhone  className='icon'/></a></li>
                                <li><a href="https://www.linkedin.com/in/mahmoud-mostafa-180826362/" target='blank' rel='noopener noreferrer'> <MdEmail  className='icon'/></a></li>

                           </div>
                               
                           
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <h2>WEBSITE</h2>
                        
                            <li> <Link to='/About'className='WEBSITE'>About Us</Link></li>
                            <li> <Link to='/Contact' className='WEBSITE'>Contact US</Link></li>

                        
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <h2>ELECTRONICS</h2>
                        
                            <li>  <Link to='/Mobiles' className='ELECTRONICS'>Mobiles</Link></li>
                            <li>  <Link to='/Laptops' className='ELECTRONICS'>Laptops</Link></li>
                            <li>  <Link to='/Appliances' className='ELECTRONICS'>Home Appliances</Link></li>
                            <li>  <Link to='/Games' className='ELECTRONICS'>Video Game</Link></li>
                            <li>  <Link to='Tv' className='ELECTRONICS'>Televisions</Link></li>
                        

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <h2>TOP BRANDS</h2>
                    
                    <li> <Link to='/Apple'className=' BRANDS'>Apple</Link></li>
                    <li> <Link to='/Samsung'className=' BRANDS'>Samsung</Link></li>
                    <li> <Link to='/Xiaomi'className=' BRANDS'>Xiaomi</Link></li>
                    <li> <Link to='/Hp'className=' BRANDS'>Hp</Link></li>
                    <li> <Link to='/Tefal'className=' BRANDS'>Tefal</Link></li>

                    
                    </div>
                </div>
               
               
            </div>
            <div className='end'>
                    <span>Created and designed by <span className='endname'>Mahmoud Mohamed</span></span>
                    <br />
                    <span>2025</span>
                </div>
        </section>
    )
}
export default Footer;