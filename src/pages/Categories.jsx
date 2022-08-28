import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
export default function Categories() {
  return (
    <div className="categories">
      <div className="d-flex flex-row  justify-content-start align-items-center mx-4 mt-5">
        <h1 className="m-0 ">التصنيفات </h1>
        <span className=" mx-3">
          <BiCategoryAlt size={40} />
        </span>
      </div>

      <div className="d-flex flex-row justify-content-around flex-wrap mt-4">
        <table className="table w-50">
          <thead>
            <tr>
              <th >ID</th>
              <th > التصنيف <BiCategoryAlt size={20} /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <button
                  type="button"
                  className="btn btn-sm noBorder"
                  style={{ fontSize: 18 }}
                >
                  تقنية
                </button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                <button
                  type="button"
                  className="btn btn-sm noBorder"
                  style={{ fontSize: 18 }}
                >
                  ادوات مكتبية
                </button>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>
                <button
                  type="button"
                  className="btn btn-sm noBorder"
                  style={{ fontSize: 18 }}
                >
                  ادوات مدرسية
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className=" d-flex justify-content-start">
      <form className="mt-3    bgGray inputBox    p-4">
        <div className="d-flex flex-column align-items-center mb-3 ">
          <label className="" htmlFor="form3Example1c">
            اسم التصنيف
          </label>
          <input type="text" className="lightInput mx-2" />
        </div>

        <button type="button" className="btn btn-sm noBorder bgGray shadow">
          اضافة
        </button>
      </form>
    </div>
    
      </div>

    
    
    </div>

  );
}
