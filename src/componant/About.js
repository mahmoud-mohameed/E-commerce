import './About.css'
import { FaUser, FaShoppingCart ,FaFilter,FaHeart } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { IoMdNotifications } from 'react-icons/io';
import { MdInsertComment } from 'react-icons/md';
import { TfiCommentsSmiley } from 'react-icons/tfi';

const About =()=>{
    return(
        <>
        <div className="About">
            <h1>About US</h1>
            <p><span>E-Commerce</span> is an easy and secure platform for people to discover and shop the products they love. With fast delivery, easy payment and return options and a 24-hour customer service, find everything you need at competitive prices. All our products are backed by our authenticity promise and E-Commerce warranty.</p>

            <h1>What is on the site?</h1>
            <p>Here is summary of what exists</p>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            <FaUser size={50} style={{color:'#005048', margin:'10px'}}/>
                            <h2>User</h2>
                            <p>Manage your profile or even delete it.</p>

                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            <FaHeart size={50} style={{color:'red', margin:'10px'}}/>
                            <h2>Wishlist</h2>
                            <p>Responsible for managing your favorite products.</p>

                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            <FaShoppingCart size={50} style={{color:'#000000', margin:'10px'}}/>
                            <h2>Cart</h2>
                            <p>Review your products before buying them.</p>

                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            <IoMdNotifications size={50} style={{color:'#87CEEB', margin:'10px'}}/>
                            <h2>Notifications</h2>
                            <p>Watching your profile updates.</p>

                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            <FaFilter size={50} style={{color:'#eadb0b', margin:'10px'}}/>
                            <h2>Feltering</h2>
                            <p>Filter products and the filtering isn't changing when you are taking the link to your friend or anybody else.</p>

                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            <GiShoppingBag  size={50} style={{color:'#005048', margin:'10px'}}/>
                            <h2>Orders</h2>
                            <p>Manage the orders you have created, whether you want to delete them or track their progress.</p>

                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            <TfiCommentsSmiley  size={50} style={{color:'#87CEEB', margin:'10px'}}/>
                            <h2>Products comments</h2>
                            <p>To share your opinion about the product you have purchased, this section becomes available after the purchase is complete.</p>

                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 '>
                        <div className='About-icon'>
                            < MdInsertComment size={50} style={{color:'#eadb0b', margin:'10px'}}/>
                            <h2>Interact</h2>
                            <p>By sending emails to your email address, we keep you informed about anything related to your account and your orders.</p>

                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        </>
    )
}


export default About;