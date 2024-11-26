
import Index from "./UI";
import Admin from "./UI/admin/admin";
import Cart from "./UI/cart";
import Catalog from "./UI/catalog";
import Footer from "./UI/footer";
import Header from "./UI/header";
import Login from "./UI/login";
import NotFound from "./UI/nofound";
import Orders from "./UI/orders";
import Product from "./UI/product";
import Registration from "./UI/registration";

import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {

  // const [userRole, setUserRole]=useState();


//   useEffect(() => {
//     const fetchUsers = async () => {
//         try {
//           axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;

//             const response = await axios.get(`http://localhost:8000/api-samohod/role`);      
//             setUserRole(response.data);
//             console.log(response.data);

//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     fetchUsers();
// }, []);




const ProtectedRoute = ({ element: Element, allowedRoles }) => {

  let userRole = localStorage.getItem('role');
  return allowedRoles.includes(userRole) ? (
      <Element />
  ) : (
      <Navigate to="/404" />
  );
};



  return (
    <div className="App">
      


      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Index/>}/>

          <Route
                path="/admin"
                element={
                    <ProtectedRoute
                        element={Admin}
                        allowedRoles={['admin']}
                    />
                }
            />





          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>


          <Route
                path="/cart"
                element={
                    <ProtectedRoute
                        element={Cart}
                        allowedRoles={['user','admin']}
                    />
                }
            />
          <Route
                path="/orders"
                element={
                    <ProtectedRoute
                        element={Orders}
                        allowedRoles={['user','admin']}
                    />
                }
            />


          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/catalog" element={<Catalog/>}/>



          <Route path="/404" element={<NotFound/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
