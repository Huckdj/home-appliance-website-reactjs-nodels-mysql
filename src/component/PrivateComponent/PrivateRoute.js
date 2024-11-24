import React,{useEffect, useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../../component/publicComponent/Login.js"
import ProductinfoComponent from "../../component/publicComponent/ProductinfoComponent.js"
import Cart from "../../component/publicComponent/Cart.js"
import Home from '../publicComponent/Home.js'
import DashBoard from './DashboardadminComponent.js'
import ManufactureAdmin from './ManufactureEditForm/AddManufactureForm.js'
import Machinetypeinput from './MachineTypeEditForm/InputMachinetype.js'
import AddProduct from './EditProductForm/AddProduct.js'
import Homecreditinfo from '../publicComponent/Promotioninfo/Homecreditinfo.js'
import C404Component from '../publicComponent/C404Component.js'
import Register from '../publicComponent/Register.js'
import InfoUser from '../publicComponent/InfoUser.js'
import Confirmorder from '../publicComponent/Confirmorder.js'
import Thankyouorder from '../publicComponent/Thankyouorder.js'
import Allproduct from '../publicComponent/Allproduct.js'
import Checkorder from './Checkorder.js'
import AdminComponent from "./AdminTabRightComponent.js";
import axios from "axios";

function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("auth");
  return (
      <Routes>
        <Route path ='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login />}/>
        <Route path ='/product_info/:id' element={<ProductinfoComponent/>}/>
        <Route path ='/cart' element={<Cart/>}/>
        {/* <Route path="/admin" element={role === 'admin' ? <AdminComponent/> : <Navigate to='/'/>} /> */}
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/manufacturingedit" element={<ManufactureAdmin />} />
        <Route path="/admin/machinetype" element={<Machinetypeinput />} />
        <Route path="/admin/machinetype/addmachine" element={<Machinetypeinput />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/" element={<Home />} />
        <Route path="/homecreditpromotion" element={<Homecreditinfo />} />
        <Route path="/404notfound" element={<C404Component />} />
        <Route path="/register" element={<Register />} />
        <Route path="/infouser/:id" element={<InfoUser />} />
        <Route path ='/thankyouorder' element={<Thankyouorder />}/>
        <Route path ='/confirmorder' element={<Confirmorder />}/>
        <Route path ='/allproduct' element={<Allproduct />}/>
        <Route path ='/admin/checkorder' element={<Checkorder />}/>
      </Routes>
  );
}

export default PrivateRoute;
