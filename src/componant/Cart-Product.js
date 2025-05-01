
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import'../Home/Cart.css'
import {clearCart,deletefromcart,increment,decrement, addtofavourite,deletefromwistlist} from '../rtk/appSlice'
import { useState } from 'react';

const CartProduct = () =>{
    const cart =useSelector(state => state.products.cart);
    const wishList =useSelector(state => state.products.wishList);
    const dispatch =useDispatch()

    
        const [removeMessage, setRemoveMessage] = useState("");
        const [wishListMessage,setwishListMessage]=useState("");
        const [removewishListMessage,setremovewishListMessage]=useState("");
   
    
    return(
       
        <div className="CartProduct">
            <div className="container">
                <div className='Remove'>
               
                <button className="RemoveAllProducts" onClick={() => {dispatch(clearCart())
                    
                    setRemoveMessage('item removed from cart successfuly✅');

                                        setTimeout(() => {
                                            
                                            setRemoveMessage('');
                                        }, 3000);
                }}>Remove All Products</button>
                
                </div>
                
                <div className="row">
                    
                        {cart.map((product)=>{
                          const isInwishlist = wishList.some((item) => item.id === product.id);
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
                                <h5>EGP {product.price*product.quantity}</h5>
                            </div>
                            <div className='number'>
                                <button className='minnas' onClick={()=>{ dispatch(decrement(product.id))}}>-</button>
                                <span>{product.quantity}</span>
                                <button className='plus' onClick={()=>{ dispatch(increment(product.id))}}>+</button>

                            </div>
                            
                            <div className='about-shooping'>
                            
                                        <button className='remove'onClick={() => {dispatch(deletefromcart({ id: product.id }));
                                        setRemoveMessage('item removed from cart successfuly✅');

                                        setTimeout(() => {
                                            
                                            setRemoveMessage('');
                                        }, 3000);
                    
                                        
                                    } } >Remove </button>


                                        {isInwishlist?
                                        <FaHeart size={20} style={{color:'#604E48', margin:'10px'}} onClick={()=>{dispatch(deletefromwistlist(product));
                                            setremovewishListMessage('item removed from wishlist successfuly✅');

                                            setTimeout(() => {
                                                
                                                setremovewishListMessage('');
                                            }, 3000);

                                        }}/>:
                                        <FaHeart size={20} style={{color:'#005048', margin:'10px'}} onClick={()=>{dispatch(addtofavourite(product));
                                            dispatch(addtofavourite(product));
                                            setwishListMessage('item added from wishlist successfuly✅');
                                            setTimeout(() => {
                                                setwishListMessage('');
                                            }, 3000);
                                            
                                            
                                        }}/>
                                        }
                                        
                                        </div>
                                        
                                        {removeMessage &&(
                                             <div className="removealert-message">{removeMessage} </div>)}
                                        {wishListMessage &&(
                                                <div className="addalert-message">{wishListMessage} </div>)}
                                        {removewishListMessage &&(
                                        <div className="removealert-message">{removewishListMessage} </div> )}
                                   
                        </div>
                        </div>
                          )
                           
                    })}
                        
                    </div>
                    
              
            </div>
        </div>
    )
}

export default CartProduct