import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Navbar from './Navbar';

const Sidebar = () => {
let navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper d-flex flex-column justify-content-around align-items-center  text-white vh-100 ">
        <h3 className='   p-5 row align-items-center'>Logo</h3>

      <div className="sidebar-links   h-100 d-flex flex-column align-items-center justify-content-around mb-5">
        <button onClick={()=>navigate('/')} className="btn text-white ">لوحة التحكم</button>
        <button onClick={()=>navigate('/employees')} className="btn text-white ">الموظفين</button>
        <button onClick={()=>navigate('/clients')} className="btn text-white ">العملاء</button>
        <button onClick={()=>navigate('/products')} className="btn text-white ">المنتجات</button>
        <button onClick={()=>navigate('/orders')} className="btn text-white ">الطلبات</button>
      </div>

      <div className="sidebar-other   h-100 d-flex flex-column align-items-center justify-content-start ">
        <h4>اخرى</h4>
        <p className='my-3'>الاعلانات</p>
        <p className='my-3'>الشكاوى </p>
        <p className='my-3'>تواصل معنا  </p>
      </div>

      </div>
    </div>
  );
};

export default Sidebar;
