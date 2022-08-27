import React from "react";
import { FaEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
export default function Clients() {
  return (
    <div className="clients ">
      <div className='d-flex flex-row  justify-content-start align-items-center mx-4'>
      <h1 className='m-0 '>العملاء </h1>
      <span   className=' mx-3'><BsPeople  size={40}/></span>
      </div>
      <div style={{ maxWidth: "90%" }} className="container ">
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>الإسم</th>
              <th>الإيميل</th>
              <th>العنوان</th>
              <th>تعديل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <button type="button" className="btn btn-sm noBorder" onClick={()=>alert('بيانات العميل')} style={{fontSize:15}}>عبدالعزيز</button>
              </td>
              <td>dev.abdulaziz@outlook.com</td>
              <td>القصيم - بريدة</td>
              <td className="">
              <button className="btn btn-sm noBorder mx-2 noPadding text-dark">
                  <FiEye size={14} />
                </button>
                <button className="btn btn-sm noBorder mx-2 noPadding  text-dark">
                  <FaEdit size={14} />
                </button>
                <button className="btn btn-sm noBorder mx-2 noPadding text-dark ">
                  <RiDeleteBin6Line size={15} />
                </button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                <button type="button" className="btn btn-sm noBorder" onClick={()=>alert('بيانات العميل')} style={{fontSize:15}}>عمر</button>
              </td>
              <td>molvy51@gmail.com</td>
              <td>القصيم - بريدة</td>
              <td className="">
              <button className="btn btn-sm noBorder mx-2 noPadding text-dark">
                  <FiEye size={14} />
                </button>
                <button className="btn btn-sm noBorder mx-2 noPadding text-dark">
                  <FaEdit size={14} />
                </button>
                <button className="btn btn-sm noBorder mx-2 noPadding text-dark ">
                  <RiDeleteBin6Line size={15} />
                </button>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>
                <button type="button" className="btn btn-sm noBorder" onClick={()=>alert('بيانات العميل')} style={{fontSize:15}}>ملفي</button>
              </td>
              <td>omar053@hotmail.com</td>
              <td>القصيم - بريدة</td>
              <td className="">
                <button className="btn btn-sm noBorder mx-2 noPadding text-dark">
                  <FiEye size={14} />
                </button>
                <button className="btn btn-sm noBorder mx-2 noPadding   text-dark    ">
                  <FaEdit size={14} />
                </button>
                <button className="btn btn-sm noBorder mx-2 noPadding   text-dark ">
                  <RiDeleteBin6Line size={15} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
