
import { useEffect,  } from "react";
import Cart from "./Cart";
import './Cart.css'
import { useDispatch,useSelector } from "react-redux";
import { fetchCategories } from "../componant/Api/Products_api";



const Prodact =() =>{
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    
   
    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch])
    
    return(
        <>
        <div className="prodact">
        <span style={{ color:"#005048", fontWeight: "bold",fontFamily:"Aclonica", fontSize:"50px",margin:"20px", padding:"10px"}}>Our Prodacts</span>
            
            <div className="container">
                <div className="row">
                    {shuffledProducts.map((product)=>{
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={product.id}>
                                <Cart product={product}/>
                            </div>
                        
                        
                        )
                    })}
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Prodact;