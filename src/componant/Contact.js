import './contact.css'

import { FaMapMarkerAlt  ,FaEnvelope , FaPhone } from 'react-icons/fa'

const Contact = () =>{
return(
    <>
    <div className="Contact">
    <h1>Contact Us</h1>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 ">
                <div className="Contact-us">
                    <FaMapMarkerAlt  size={50} style={{color:'#005048', margin:'10px'}}/>
                    <h2>Address</h2>
                    <p>Mohamed Yousef st.</p>
                    <p>Shobura,Cairo</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
                <div className="Contact-us">
                <FaPhone size={50} style={{color:'#005048', margin:'10px'}}/>
                    <h2>Contacts</h2>
                    <p>01121775618 (Whatsapp)</p>
                    <p>01080752276</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
                <div className="Contact-us">
                <FaEnvelope size={50} style={{color:'#005048', margin:'10px'}}/>
                    <h2>Emails</h2>
                    <p>mostafamahmoud143@gmail.com</p>
                    <p>mahmoudmohamed2860@yahoo.com</p>
                </div>

            </div>
        </div>

        </div>
    </div>

    
   
    </>
)
}

export default Contact ;