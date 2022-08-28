import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FcCustomerSupport} from 'react-icons/fc';
export default function Employees() {
  return (
    <div className='employees '>
      <div className='d-flex flex-row  justify-content-start align-items-center mx-4 mt-5'>
      <h1 className='m-0 '>الموظفين </h1>
      <span className=' mx-3   noBorder'><FcCustomerSupport  size={40}/></span >
      </div>

      <div style={{maxWidth:"90%"}} className='container '>
        <table className="table ">
  <thead >
    <tr>
      <th>ID</th>
      <th>الإسم</th>
      <th>الصلاحيات</th>
      <th>تعديل</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >1</th>
      <td>عبدالعزيز</td>
      <td>مدير كبير</td>
      <td className='d-flex  justify-content-center'>
        <button className='btn btn-sm noBorder   text-dark mx-2 noPadding   '><FaEdit  className='text-dark' size={14}/></button> 
        <button className='btn btn-sm noBorder   text-dark mx-2 noPadding'><RiDeleteBin6Line className='text-danger' size={16}/></button>
      </td>
    </tr>
    <tr>
      <th >2</th>
      <td>ملفي</td>
      <td>ابو المدير</td>
      <td className='d-flex  justify-content-center'>
      <button className='btn btn-sm noBorder   text-dark mx-2 noPadding   '><FaEdit  className='text-dark' size={14}/></button> 
        <button className='btn btn-sm noBorder   text-dark mx-2 noPadding'><RiDeleteBin6Line className='text-danger' size={16}/></button>
      </td>
    </tr>
    <tr >
      <th >3</th>
      <td>عمر</td>
      <td>اخوه</td>
      <td className='d-flex  justify-content-center'>
      <button className='btn btn-sm noBorder   text-dark mx-2 noPadding   '><FaEdit  className='text-dark' size={14}/></button> 
        <button className='btn btn-sm noBorder   text-dark mx-2 noPadding'><RiDeleteBin6Line className='text-danger' size={16}/></button>
      </td>
    </tr>
  </tbody>
</table>


    </div>
<div className='d-flex flex-column  justify-content-start align-items-start mx-4 mt-5 '>
  <div>
      <h1 className='m-0 d-inline'>اضافة موظف  </h1>
      <span className=' mx-3 noBorder'><FcCustomerSupport  size={40}/></span >
  </div>



      <form className="mt-3  align-self-center bgGray inputBox  w-50 w-sm-100 ">

        <div className="d-flex flex-column mb-3 ">
        <label className="" htmlFor="form3Example1c">الإسم  </label>
    <input type="text"  className="lightInput mx-2" />
        </div>
        <div className="d-flex flex-column mb-3 ">
        <label className="" htmlFor="form3Example3c">اسم المستخدم /انقليزي</label>
    <input type="text"  className="lightInput mx-2" />
        </div>
        <div className="d-flex flex-column mb-3 ">
        <label className="form-label" htmlFor="form3Example4c">كلمة المرور</label>
    <input type="password"  className="lightInput mx-2" />
        </div>

        <div className="d-flex flex-column mb-3 ">
        <label className="form-label mx-2" htmlFor="form3Example4cd">الصلاحيات : </label>
        <div className="d-flex flex-row">

        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
      العملاء
  </label>
  <input className="form-check-input mx-2" type="checkbox" value="" />
  <label className="form-check-label" htmlFor="flexCheckIndeterminate">
      الطلبات
  </label>
  <input className="form-check-input mx-2" type="checkbox" value="" />
  <label className="form-check-label" htmlFor="flexCheckIndeterminate">
      المنتجات
  </label>
  <input className="form-check-input mx-2" type="checkbox" value="" />
        </div>
</div>
<button type='button' className='btn btn-lg noBorder bgGray shadow'>اضافة</button>
</form>
      </div>
    </div>
  )
}
