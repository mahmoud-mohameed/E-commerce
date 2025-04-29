import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../Home/styles.css'
import { useDispatch, useSelector } from "react-redux";
import {deletefromcart, addtocart, addtofavourite,deletefromwistlist} from '../rtk/appSlice'
import { FaHeart } from "react-icons/fa";
import axios from 'axios';




const ProductDetails = () =>{
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);


  const cart =useSelector(state => state.products.cart);
    const wishList =useSelector(state => state.products.wishList);
    const dispatch =useDispatch()


    const [cartMessage, setCartMessage] = useState("");
    const [removeMessage, setRemoveMessage] = useState("");
    const [wishListMessage,setwishListMessage]=useState("");
    const [removewishListMessage,setremovewishListMessage]=useState("");
  




  useEffect(() => {
      const getProduct = async () => {
          setLoading(true);
          try {
        const response = await axios.get(`http://localhost:5000/data/${id}`);
        
              
    setProductDetails( response.data);
          } catch (error) {
              console.error("Error fetching product:", error);
          }
          setLoading(false);
      };

    getProduct();
}, [id]);

if (loading) {
    return <div>Loading...</div>;
}

if (!productDetails) {
    return <div>No product found</div>;
  }
  


  const isInwishlist = wishList.some((item) => item.id === productDetails.id);
  const isIncart =  cart.some((item) => item.id === productDetails.id);
    return(
    <>
    
        <div className="ProductDetails">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <Swiper
        spaceBetween={30}
        centeredSlides={true}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      className="mySwiper photoslider">
        <SwiperSlide>
          <img src={productDetails.image ? productDetails.image:productDetails.image} alt='slider1' width="80%" height="80%"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={productDetails.image2 ? productDetails.image2:productDetails.image} alt='slider2' width="80%" height="80%"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={productDetails.image3 ? productDetails.image3:productDetails.image} alt='slider3' width="80%" height="80%"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={productDetails.image4 ? productDetails.image4:productDetails.image} alt='slider4' width="80%" height="80%"/>
          </SwiperSlide>
        <SwiperSlide>
        <img src={productDetails.image5 ? productDetails.image5:productDetails.image} alt='slider5'width="80%" height="80%"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={productDetails.image6 ? productDetails.image6:productDetails.image} alt='slider6' width="80%" height="80%"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={productDetails.image7 ? productDetails.image7:productDetails.image} alt='slider7' width="80%" height="80%" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={productDetails.image8 ? productDetails.image2:productDetails.image} alt='slider8' width="80%" height="80%"/>
        </SwiperSlide>
      </Swiper>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-3">
                        <div className="ProductDetailsinfo">
                
                        {productDetails.title && <h1>{productDetails.title}</h1>}
                {productDetails.price && <h2>EGP {productDetails.price}</h2>}

                {productDetails.details?.brandName && (
                    <h4><span>Brand Name</span> {productDetails.details.brandName}</h4>
                )}
                {productDetails.details?.operatingSystem && (
                    <h4><span>Operating System</span> {productDetails.details.operatingSystem}</h4>
                )}
                {productDetails.details?.ram&& (
                    <h4><span>Ram</span> {productDetails.details.ram}</h4>
                )}
                {productDetails.details?.cpuModel&& (
                    <h4><span>Cpu Model</span> {productDetails.details.cpuModel}</h4>
                )}
                {productDetails.details?.cpuSpeed&& (
                    <h4><span>Cpu Speed</span> {productDetails.details.cpuSpeed}</h4>
                )}
                {productDetails.details?.memoryStorage && (
                    <h4><span>Memory Storage</span> {productDetails.details.memoryStorage}</h4>
                )}
                {productDetails.details?.modelName && (
                    <h4><span>Model Name</span> {productDetails.details.modelName}</h4>
                )}

                <h1>About this Item</h1>
                <ul>
                    {productDetails.about?.about1 && <li>{productDetails.about.about1}</li>}
                    {productDetails.about?.about2 && <li>{productDetails.about.about2}</li>}
                    {productDetails.about?.about3 && <li>{productDetails.about.about3}</li>}
                    {productDetails.about?.about4 && <li>{productDetails.about.about4}</li>}
                    {productDetails.about?.about5 && <li>{productDetails.about.about5}</li>}
                    </ul>
                    {isIncart?
                     <button className='remove-product' onClick={()=>{dispatch(deletefromcart(productDetails))
                        setRemoveMessage('item removed from cart successfuly✅');

                    setTimeout(() => {
                        
                        setRemoveMessage('');
                    }, 3000);

                     }}>Remove from cart</button>: 
                     <button className='add-product' onClick={()=>{dispatch(addtocart(productDetails))
                        setCartMessage('item added to cart successfuly✅');
                        setTimeout(() => {
                            
                            setCartMessage('');
                        }, 3000);
                     }}>Add To Cart</button>}
                     {isInwishlist?<FaHeart size={27} style={{color:'#604E48', margin:'10px'}} onClick={()=>{dispatch(deletefromwistlist(productDetails))
                         setremovewishListMessage('item removed from wishlist successfuly✅');

                         setTimeout(() => {
                             
                             setremovewishListMessage('');
                         }, 3000);
                     }}/>:
                                 <FaHeart size={27} style={{color:'#005048', margin:'10px'}} onClick={()=>{dispatch(addtofavourite(productDetails))
                                    setwishListMessage('item added from wishlist successfuly✅');

                                    setTimeout(() => {
                                        
                                        setwishListMessage('');
                                    }, 3000);
                                 }}/>}
                    </div>
                    </div>
                    {cartMessage  && (
            <div className="addalert-message">{cartMessage} </div>
            )}
        {removeMessage &&(
            <div className="removealert-message">{removeMessage} </div>
        )}

        {wishListMessage &&(
             <div className="addalert-message">{wishListMessage} </div>
        )}
        {removewishListMessage &&(
            <div className="removealert-message">{removewishListMessage} </div>
        )

        }
                </div>
            </div>
        </div>
            
    </>
    )
}
export default ProductDetails;