import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './component/publicComponent/Home.js';
import  DashBoard from './component/PrivateComponent/DashboardadminComponent.js'
import ManufactureAdmin from './component/PrivateComponent/ManufactureEditForm/AddManufactureForm.js'
import Machinetypeinput from './component/PrivateComponent//MachineTypeEditForm/InputMachinetype.js'
import AddProduct from './component/PrivateComponent/EditProductForm/AddProduct.js'
import Homecreditinfo from './component/publicComponent/Promotioninfo/Homecreditinfo.js'
import C404Component from './component/publicComponent/C404Component.js'
import Register from './component/publicComponent/Register.js'
import PrivateRoute from './component/PrivateComponent/PrivateRoute.js'
import InfoUser from './component/publicComponent/InfoUser.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Admin Router */}
        <Route path="/admin" element={<DashBoard />} />
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/manufacturingedit" element={<ManufactureAdmin />} />
        <Route path="/admin/machinetype" element={<Machinetypeinput />} />
        <Route path="/admin/machinetype/addmachine" element={<Machinetypeinput />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        {/* Public Router */}
        <Route path="/" element={<Home />} />
        <Route path="/homecreditpromotion" element={<Homecreditinfo />} />
        <Route path="/404notfound" element={<C404Component />} />
        <Route path="/register" element={<Register />} />
        <Route path="/infouser" element={<InfoUser />} />
      </Routes>
      <PrivateRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
