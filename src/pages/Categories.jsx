import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
export default function Categories() {
  return (
    <div className="categories ">
      <div className="d-flex flex-row  justify-content-start align-items-center mx-4 mt-5">
        <h1 className="m-0 ">التصنيفات </h1>
        <span className=" mx-3">
          <BiCategoryAlt size={40} />
        </span>
      </div>

      <div className="d-flex flex-row justify-content-center flex-wrap mt-4">
        <div className="col-7">
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>
                التصنيف <BiCategoryAlt size={20} />
              </th>
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
        </div>

        <div className=" col-4 ">
          <form className="mt-3    bgGray inputBoxCenter   lightBorder  ">
            <div className="col-12 ">
              <div className="d-flex flex-column align-items-center   mb-3 ">
                <label className="" htmlFor="form3Example1c">
                  اسم التصنيف
                </label>
                <input type="text" className="lightInput mx-2" />
              </div>
              <button
                type="button"
                className="btn btn-sm noBorder bgGray shadow mt-3  col-12 align-self-center"
              >
                اضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
