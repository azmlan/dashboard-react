import React from 'react';


const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="text-white  bg-danger sidebar-wrapper d-flex flex-column justify-content-around     vh-100 ">
        <p className=' bg-dark'>Logo</p>

      <div className="sidebar-links bg-primary h-100 ">
        <p>لوحة التحكم</p>
        <p>الموظفين</p>
        <p>المستخدمين</p>
        <p>المنتجات</p>
        <p>الطلبات</p>
      </div>

      <div className="sidebar-other bg-warning h-100">
        <p>الاعلانات</p>
        <p>الشكاوى </p>
        <p>تواصل مع الفريق التقني</p>
      </div>

      </div>
    </div>

  );
};

export default Sidebar;
