import React from 'react'
import { MdFileDownloadDone } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { TbDots } from "react-icons/tb";
import { FcCancel } from "react-icons/fc";
import { IoIosArrowDropdown } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function Orders() {
  return (
    <div className="orders ">
    <div className='d-flex flex-row  justify-content-start align-items-center mx-4'>
      <h1 className='m-0 '>الطلبات </h1>
      <span className=' mx-3 '><MdProductionQuantityLimits  size={40}/></span >
      </div>
    <div style={{ maxWidth: "90%" }} className="container ">
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>اسم العميل</th>
            <th>المبلغ</th>
            <th>تاريخ الطلب</th>
            <th>حالة الطلب</th>
            <th>تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>عبدالعزيز</td>
            <td>٤٠٣</td>
            <td><span> الاثنين -  2020/6/2</span></td>
            <td>
              <button className='btn btn-sm noBorder greenHover'>
              <IoIosArrowDropdown />
              <span className='mx-1'>مكتمل</span>
              <MdFileDownloadDone/>
              </button>
              </td>
            <td><button className="btn btn-sm noBorder mx-2 noPadding text-dark"><FiEye size={14} /></button></td>
          </tr>
          <tr>
            <th>٢</th>
            <td>ملفي</td>
            <td>٦٩٠</td>
            <td><span> الاربعاء -  2022/6/9</span></td>
            <td>
              <button className='btn btn-sm noBorder blueHover'>
              <IoIosArrowDropdown />
              <span className='mx-1'>جار التوصيل</span>
              <TbDots/>
              </button>
              </td>
            <td><button className="btn btn-sm noBorder mx-2 noPadding text-dark"><FiEye size={14} /></button></td>
          </tr>
          <tr>
            <th>٣</th>
            <td>عمر</td>
            <td>٩٧٣</td>
            <td><span> السبت -  2022/5/18</span></td>
            <td>
            <button className='btn btn-sm noBorder redHover'>
              <IoIosArrowDropdown />
              <span className='mx-1'>ملغى</span>
              <FcCancel/>
              </button>
              </td>
            <td><button className="btn btn-sm noBorder mx-2 noPadding text-dark"><FiEye size={14} /></button></td>
          </tr>
          <tr>
            <th>٤</th>
            <td>عبدالله</td>
            <td>٢٣٠</td>
            <td><span> السبت -  2022/5/18</span></td>
            <td>
            <button className='btn btn-sm noBorder grayHover'>
              <IoIosArrowDropdown />
              <span className='mx-1'>في السلة</span>
              <GrCart/>
              </button>
              </td>
            <td><button className="btn btn-sm noBorder mx-2 noPadding text-dark"><FiEye size={14} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
