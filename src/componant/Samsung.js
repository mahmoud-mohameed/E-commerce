import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchCategories } from "./Api/Products_api";
import Cart from "../Home/Cart";



const Samsung = () =>{
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
   
    return(
        <div className="Samsung">
            <span style={{ color:"#005048", fontWeight: "bold",fontFamily:"Aclonica", fontSize:"50px",margin:"20px", padding:"10px"}}>Samsung Brand</span>
            <div className="container">
                <div className="row">
                    {products.map((Samsung) => (
                         Samsung.details.brandName === 'SAMSUNG' &&(
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={Samsung.id}>
                            <Cart product={Samsung}/>
                        </div>
                    
                            
                        )
                    ))

                    }
                </div>
            </div>

        </div>

    )
}
export default Samsung ;