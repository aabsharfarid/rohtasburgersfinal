import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer.jsx"
import Shipping from "./components/cart/Shipping";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast,{Toaster} from "react-hot-toast"
import {ProtectedRoute} from "protected-route-react"


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/tables.scss";
import "./styles/orderdetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";


function App() {
  const dispatch = useDispatch();
const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);


  return (
  <Router>
    <Header isAuthenticated={isAuthenticated}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />


      <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
        <Login/>
      </ProtectedRoute>
    } 
    />


    <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>

      <Route path='/me' element={<Profile/>} />
      <Route path='/shipping' element={<Shipping/>} />
      <Route path='/confirmorder' element={<ConfirmOrder/>} />
      <Route path='/myorders' element={<MyOrders/>} />
      <Route path='/order/:id' element={<OrderDetails/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
    </Route>


      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}  adminRoute={true} isAdmin={user && user.role==="admin"}  redirectAdmin="/me"/>}>

      <Route path='/admin/dashboard' element={<Dashboard/>} />
      <Route path='/admin/orders' element={<Orders/>} />
      <Route path='/admin/users' element={<Users/>} />

      </Route>
      
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    <Toaster/> 

  </Router>
  )
}

export default App;
