import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router';
import Mynav from './Mynav.js';
import Homes from './Homes.js';
import PrivateComponent from './PrivateComponent.js';
import Register from './Register.js';
import Login from './Login.js';
import Shop from './Shop.js';
import Allprodet from './Allprodet.js'
import Cart from './Cart.js';
import About from './About.js';
import Contact from './Contact.js';
import Fruitsveg from './Fruitsveg.js';
import Home6det from './Home6det.js';
import Wishlist from './Wishlist.js';

import Oilnut from './Oilnut.js';
import Checkout from './Checkout.js';
import Success from './Success.js';
import Oilnutdet from './Oilnutdet.js';
import Fruitsvegdet from './Fruitsvegdet.js';
import Grainspulses from './Grainspulses.js';
import Grainspulsesdet from './Grainspulsesdet.js';
import Dairy from './Dairy.js';
import Dairydet from './Dairydet.js';
import Herbspices from './Herbspices.js';
import Herbspicesdet from './Herbspicesdet.js';
import Skin from './Skin.js';
import Skindet from './Skindet.js';
import Beverages from './Beverages.js';
import Beveragesdet from './Beveragesdet.js';
import Privacypolicy from './Privacypolicy.js';
import MangoPreOrder from './MangoPreOrder.js';
function App() {
  return (
<>
<BrowserRouter>
<Mynav/>
    <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/' element={<Homes/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/wishlist' element={<Wishlist/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/privacy' element={<Privacypolicy/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/fruitveg' element={<Fruitsveg/>}></Route>
    <Route path='/Oilnut' element={<Oilnut/>}></Route>
    <Route path='/preorder' element={<MangoPreOrder/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route path='/form/:id' element={<Allprodet/>}></Route>
    <Route path='/for/:id' element={<Home6det/>}></Route>
    <Route path='/me/:id' element={<Fruitsvegdet/>}></Route>
    <Route path='/oil/:id' element={<Oilnutdet/>}></Route>
    <Route path='/grainpulses' element={<Grainspulses/>}></Route>
    <Route path='/grain/:id' element={<Grainspulsesdet/>}></Route>
    <Route path='/dairyproducts' element={<Dairy/>}></Route>
    <Route path='/dairy/:id' element={<Dairydet/>}></Route>
    <Route path='/herbspices' element={<Herbspices/>}></Route>
    <Route path='/herb/:id' element={<Herbspicesdet/>}></Route>
    <Route path='/beverages' element={<Beverages/>}></Route>
    <Route path='/beveragesdet/:id' element={<Beveragesdet/>}></Route>
    <Route path='/skinproducts' element={<Skin/>}></Route>
    <Route path='/skin/:id' element={<Skindet/>}></Route>
    <Route element={<PrivateComponent />}>
    <Route path='/cart' element={<Cart/>}></Route>
    </Route>
       </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
