
import './Gategories.css'
import { Link} from "react-router-dom";
import img1 from '../image/categories/mobiles.avif'
import img2 from '../image/categories/televisions.avif'
import img3 from '../image/categories/laptops.avif'
import img4 from '../image/categories/watches.avif'
import img5 from '../image/categories/games.avif'
import img6 from '../image/categories/beauty.avif'
import img7 from '../image/categories/fragrances.avif'
import img8 from '../image/categories/headsets.avif'
import img9 from '../image/categories/appliances.avif'
import img10 from '../image/categories/menfashion.avif'


const Gategories = () =>{
    return(
        <>
       <div className="Gategorie">
       <h1>Gategories</h1>
        <div className="container">
           
            
            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-3 col-4 ">
                    <div className="Gategories-about">
                        <Link to="/Mobiles"><img src={img1} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4 ">
                    <div className="Gategories-about">
                        <Link to="/tv"><img src={img2} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4 ">
                    <div className="Gategories-about">
                        <Link to="/Laptops"><img src={img3} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4">
                    <div className="Gategories-about">
                        <Link to="/Watches"><img src={img4} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4 ">
                    <div className="Gategories-about">
                        <Link to="/Games"><img src={img5} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4 ">
                    <div className="Gategories-about">
                        <Link to="/Beauty"><img src={img6} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4 ">
                    <div className="Gategories-about">
                        <Link to="/Perfumes"><img src={img7} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4">
                    <div className="Gategories-about">
                        <Link to="/headphones"><img src={img8} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4">
                    <div className="Gategories-about">
                        <Link to="/Appliances"><img src={img9} alt="img"/></Link>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4">
                    <div className="Gategories-about">
                        <Link to="/clothes"><img src={img10} alt="img"/></Link>
                    </div>
                </div>
                
            </div>
        </div>
       </div>
        </>
    )
}


export default Gategories;