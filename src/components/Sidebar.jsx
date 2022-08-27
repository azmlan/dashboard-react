import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Navbar from './Navbar';

const Sidebar = () => {
let navigate = useNavigate();
  return (
    <div className="sidebar shadow mx-2 ">
      <div className="sidebar-wrapper d-flex flex-column justify-content-around align-items-center  text-dark vh-100 ">
        <h3 className='   p-5 row align-items-center'>Logo</h3>

      <div className="sidebar-links   h-100 d-flex flex-column align-items-center justify-content-around mb-5 text-dark">
        <button onClick={()=>navigate('/')} className="btn  ">لوحة التحكم</button>
        <button onClick={()=>navigate('/employees')} className="btn  ">الموظفين</button>
        <button onClick={()=>navigate('/clients')} className="btn  ">العملاء</button>
        <button onClick={()=>navigate('/products')} className="btn  ">المنتجات</button>
        <button onClick={()=>navigate('/orders')} className="btn  ">الطلبات</button>
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
