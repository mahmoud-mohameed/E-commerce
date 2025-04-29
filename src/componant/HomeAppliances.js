
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchCategories } from "./Api/Products_api";
import Cart from "../Home/Cart";



const HomeAppliances = () =>{
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
   
    return(
        <div className="HomeAppliances">
            <span style={{ color:"#005048", fontWeight: "bold",fontFamily:"Aclonica", fontSize:"50px",margin:"20px", padding:"10px"}}>Home Appliances</span>
            <div className="container">
                <div className="row">
                    {products.map((Appliances) => (
                        Appliances.type === 'appliance' && (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={Appliances.id}>
                            <Cart product={Appliances}/>
                        </div>
                    
                            
                        )
                    ))

                    }
                </div>
            </div>

        </div>

    )
}
export default HomeAppliances;