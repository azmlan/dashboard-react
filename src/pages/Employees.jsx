import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri';
export default function Employees() {
  return (
    <div className='employees '>
      <h1 className='px-5'>الموظفين </h1>
      <div style={{maxWidth:"90%"}} className='container '>
        <table className="table ">
  <thead >
    <tr>
      <th>#</th>
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
        <button className='btn btn-sm noBorder   text-dark noMargin noPadding   '><FaEdit size={14}/></button> 
        <button className='btn btn-sm noBorder   text-dark noMargin noPadding'><RiDeleteBin6Line size={15}/></button>
      </td>
    </tr>
    <tr>
      <th >2</th>
      <td>ملفي</td>
      <td>ابو المدير</td>
      <td className='d-flex  justify-content-center'>
        <button className='btn btn-sm noBorder   text-dark noMargin noPadding   '><FaEdit size={14}/></button> 
        <button className='btn btn-sm noBorder   text-dark noMargin noPadding'><RiDeleteBin6Line size={15}/></button>
      </td>
    </tr>
    <tr >
      <th >3</th>
      <td>عمر</td>
      <td>اخوه</td>
      <td className='d-flex  justify-content-center'>
        <button className='btn btn-sm noBorder   text-dark iconCircle   '><FaEdit size={14}/></button> 
        <button className='btn btn-sm noBorder   text-dark iconCircle'><RiDeleteBin6Line size={15}/></button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  )
}
