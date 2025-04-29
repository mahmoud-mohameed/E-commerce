
import './App.css';


import { Fragment } from 'react'; 
import Home from './Home/Home';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Header from './Home/Header';
import Navs from './Home/Nav';
import Footer from './Home/Footer';
import About from './componant/About';
import Contact from './componant/Contact';
import Sign from './componant/Forms/Sing';
import ProductDetails from './componant/ProductDetails'
import Prodact from './Home/prodact'
import Mobiles from './componant/Mobiles';
import Laptops from './componant/Laptops';
import Games from './componant/Games';
import HomeAppliances from './componant/HomeAppliances';
import Perfumes from './componant/Perfumes';
import Televisions from './componant/Tv';
import Watches from './componant/Watches';
import Beauty from './componant/Beauty';
import Headsets from './componant/HeadSets';
import Menfashion from './componant/MensFashion';
import Apples from './componant/Apple';
import Hp from './componant/Hp';
import Samsung from './componant/Samsung';
import Tefal from './componant/Tefal';
import Xiaomi from './componant/Xiaomi';
import CartProduct from './componant/Cart-Product';
import WishList from './componant/Wish';
import Signup from './componant/Forms/Signup';



const Layout = () => {
  return (
      <>
          
          <Header/>
          <Navs/>
          <Outlet />
          <Footer />
      </>
  );
}

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />}/>
    <Route index path='/home' element={<Home />}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Mobiles' element={<Mobiles/>}/>
    <Route path='/Laptops' element={<Laptops/>}/>
    <Route path='/Appliances' element={<HomeAppliances/>}/>
    <Route path='/Games' element={<Games/>}/>
    <Route path='/Perfumes' element={<Perfumes/>}/>
    <Route path='/tv' element={<Televisions/>}/>
    <Route path='/Watches' element={<Watches/>}/>
    <Route path='/Beauty' element={<Beauty/>}/>
    <Route path='/headphones' element={<Headsets/>}/>
    <Route path='/clothes' element={<Menfashion/>}/>
    <Route path='/Apple' element={<Apples/>}/>
    <Route path='/Hp' element={<Hp/>}/>
    <Route path='/Tefal' element={<Tefal/>}/>
    <Route path='/Samsung' element={<Samsung/>}/>
    <Route path='/Xiaomi' element={<Xiaomi/>}/>
    <Route path='/Cart' element={<CartProduct/>}/>
    <Route path='/Wishlist' element={<WishList/>}/>

    <Route path="/" element={<Prodact />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    

    </Route>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Sign' element={<Sign/>}/>
    </>
  )
)
function App() {
  return (
    <Fragment>
    <RouterProvider router={routers} />  
    </Fragment>
  

  );
}

export default App;
