import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {addtocart,clearwishlist, deletefromwistlist,deletefromcart} from '../rtk/appSlice'
import'../Home/Cart.css'
import { useState } from "react";



const WishList =() =>{
   
    const wishList =useSelector(state => state.products.wishList);
    
        const dispatch =useDispatch()
        const cartItems = useSelector((state) => state.products.cart);

        const [cartMessage, setCartMessage] = useState("");
            const [removeMessage, setRemoveMessage] = useState("");
            const [removewishListMessage,setremovewishListMessage]=useState("");
    
    return(
        <>
       <div className="wishList">
        <div className="container">
            <div className='Remove'>
                            <button className="RemoveAllwish" onClick={() => dispatch(clearwishlist())}>Remove All favourites</button>
                            
                            </div>
            <div className='wish'>
            
            <div className="row">
                {wishList.map((product)=>{
                     const isInCart = cartItems.some((item) => item.id === product.id);
                    return(
                       
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={product.id}>
                            <div className="Cart">
                             <div className="about-cart">
                                    <Link to={`/product/${product.id}`}><img src={product.image} alt={product.title}/></Link>
                                </div>
                                <div className='title'>
                                    <Link to={`/product/${product.id}`} className='title-cart'>
                                    <h4>{product.title}</h4>
                                    </Link>
                                </div>
                                <div className='price'>
                                    <h5>EGP {product.price}</h5>
                                </div>
                                <div className="add-remove">
                                
    
                                    { isInCart? <button className="remove-Cart" onClick={()=>{dispatch(deletefromcart(product))
                                        setRemoveMessage('item removed from cart successfuly✅');

                                        setTimeout(() => {
                                            
                                            setRemoveMessage('');
                                        }, 3000);
                    
                                    }}>Remove from cart</button>:
                                     <button className="Add-ToCart" onClick={()=>{dispatch(addtocart(product))
                                        setCartMessage('item added to cart successfuly✅');
                                        setTimeout(() => {
                                            
                                            setCartMessage('');
                                        }, 3000);
                                     }}>Add To Cart</button>}
                                
                                <button  className="Remove-fromwishList"onClick={()=>{dispatch(deletefromwistlist(product))
                                     setremovewishListMessage('item removed from wishlist successfuly✅');

                                     setTimeout(() => {
                                         
                                         setremovewishListMessage('');
                                     }, 3000);
                                }}>Remove from wishList</button>
    
                        </div>
                        </div>
                        </div>
                    )
                   


})}
{cartMessage  && (
            <div className="addalert-message">{cartMessage} </div>
            )}
        {removeMessage &&(
            <div className="removealert-message">{removeMessage} </div>
        )}
        {removewishListMessage &&(
            <div className="removealert-message">{removewishListMessage} </div>
        )

        }
            </div>

        </div>
       </div>
       </div>
       </>
    )}
  export default WishList;
  