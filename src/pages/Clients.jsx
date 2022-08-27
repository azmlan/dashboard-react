import React from "react";
import { FaEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Clients() {
  return (
    <div className="clients ">
      <h1 className="px-5">العملاء</h1>
      <div style={{ maxWidth: "90%" }} className="container ">
        <table className="table ">
          <thead>
            <tr>
              <th>#</th>
              <th>الإسم</th>
              <th>الإيميل</th>
              <th>العنوان</th>
              <th>تعديل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>عبدالعزيز</td>
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
              <td>ملفي</td>
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
              <td>عمر</td>
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
