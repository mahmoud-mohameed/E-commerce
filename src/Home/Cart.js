import './Cart.css'
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { addtocart  ,addtofavourite,deletefromcart,deletefromwistlist} from '../rtk/appSlice';
import { useState } from 'react';






const Cart = (props)=>{
    const {product}=props;

    const [cartMessage, setCartMessage] = useState("");
    const [removeMessage, setRemoveMessage] = useState("");
    const [wishListMessage,setwishListMessage]=useState("");
    const [removewishListMessage,setremovewishListMessage]=useState("");
    
    
    const dispatch =useDispatch()
    const cartItems = useSelector((state) => state.products.cart);
    const isInCart = cartItems.some((item) => item.id === product.id);
    const wistitems =useSelector ((state)=>state.products.wishList);
    const isInwishlist = wistitems.some((item) => item.id === product.id);
    
    return(
        <>
       
        <div className='Cart'>
        <div className="about-cart">
        <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title}/>
            </Link>
            </div>
            <div className="caet-title">
            <Link to={`/product/${product.id}`} className='title-cart'>
            <h4>{product.title}</h4>
            </Link>
            <h5>EGP {product.price}</h5>
            </div>
            <div className='about-shooping'>
                {isInCart ? 
                <button className='remove-product' onClick={()=>{dispatch(deletefromcart(product));
                    setRemoveMessage('item removed from cart successfuly✅');

                    setTimeout(() => {
                        
                        setRemoveMessage('');
                    }, 3000);


                }}>Remove from cart</button>: 


                <button className='add-product'
                 onClick={()=>{dispatch(addtocart(product));
                    setCartMessage('item added to cart successfuly✅');
                    setTimeout(() => {
                        
                        setCartMessage('');
                    }, 3000);

                }}>Add To Cart</button>}

            {isInwishlist ?
            <FaHeart size={27} style={{color:'#604E48', margin:'10px'}} onClick={()=>{
                dispatch(deletefromwistlist(product));
                setremovewishListMessage('item removed from wishlist successfuly✅');

                    setTimeout(() => {
                        
                        setremovewishListMessage('');
                    }, 3000);

            }}/>:
            <FaHeart size={27} style={{color:'#005048', margin:'10px'}} onClick={()=>{
                dispatch(addtofavourite(product));
                setwishListMessage('item added from wishlist successfuly✅');

                    setTimeout(() => {
                        
                        setwishListMessage('');
                    }, 3000);


            }}/>}
            

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
      
        </>)
}

export default Cart;