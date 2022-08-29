import React,{useState} from 'react'
import { FaStore,FaLayerGroup } from "react-icons/fa";
import { BiCategoryAlt ,BiDetail } from "react-icons/bi";
import { TbCurrencyRiyal } from "react-icons/tb";
import DragDrop from '../components/DragDropImage/DragDrop';
export default function Products() {
  const [imageSent, setImageSent] = useState([]);

  const uploadFiles =()=>{

  }
  return (
    <div className='products  '>
      <div className="d-flex flex-row  justify-content-start align-items-center mx-4 mt-5">
        <h1 className="m-0 ">المنتجات </h1>
        <span className=" mx-3">
          <FaStore size={40} />
        </span>
      </div>
      <div className="productWrapper d-flex flex-row flex-wrap justify-content-between    bgGray inputBoxRight   ">
      <div className="productDetailsContainer col-lg-4 col-md-12  solidBorder mx-1 my-1" >
      <form className="mt-3 d-flex flex-column  ">
      <div className="col-11 ">
        <div className="d-flex flex-column align-items-start  mb-3">
          <label className="" htmlFor="form3Example1c">
            اسم المنتج
            <FaStore size={20}className="mx-2" /> 
          </label>
          <input type="text" className="lightInput mx-2" />
        </div>
        <div className="d-flex flex-column align-items-start  mb-3 ">
          <label className="" htmlFor="form3Example1c">
          التصنيف
          <BiCategoryAlt size={20}className="mx-2" /> 
          </label>
          <select name="categories" id="" className='lightInput p-1'>
            <option value="">اختر تصنيف</option>
            <option value="تقنية">تقنية</option>
            <option value="ادوات مدرسية">ادوات مدرسية</option>
            <option value="ادوات مكتبية">ادوات مكتبية</option>
          </select>
        </div>
        <div className="d-flex flex-column align-items-start  mb-3 ">
          <label className="" htmlFor="form3Example1c">
            السعر
            <TbCurrencyRiyal size={20}className="mx-2" /> 
          </label>
          <input type="text" className="lightInput mx-2" />
        </div>
        <div className="d-flex flex-column align-items-start  mb-3 ">
          <label className="" htmlFor="form3Example1c">
            التفاصيل
            <BiDetail size={20}className="mx-2" /> 
          </label>
          <textarea type="text" className="textAreaInput mx-2 " rows="4" cols="50" >
          </textarea>
        </div>
        <div className="d-flex flex-column align-items-start  mb-3 ">
          <label className="" htmlFor="form3Example1c">
            الكمية
            <FaLayerGroup size={20}className="mx-2" /> 
          </label>
          <input type="text" className="lightInput mx-2" />
        </div>
        </div>

      </form>
      </div>
      <div className="productImageContainer col-lg-7  col-md-12 solidBorder mx-1 my-1">
      <DragDrop/>
      </div>
      </div>
    </div>
  )
}
