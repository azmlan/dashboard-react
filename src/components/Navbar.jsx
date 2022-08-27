import React from "react";
import { TbMessages } from "react-icons/tb";
import { GrCart } from "react-icons/gr";

import { IoIosArrowDropdown } from "react-icons/io";
import { FaBars ,FaRegBell } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="navbar d-flex flex-row  min-h-50  col-12 shadow">
      {/* first part of the nav */}
      <div className=" col-md-7  col-sm-12 col-xs-12 p-1 ">
        <button className=" btn  noBorder  barIconButton mx-3">
            <FaBars className="barIcon"/>
        </button>
        <button className=" btn noBorder mx-4 " >
            <RiSearchLine />
        <input type="search"  className="searchBox mx-2 " /> 
        </button>
      </div>
    {/* second part of the nav */}
      <div className=" col-md-5 col-sm-12  col-xs-12 p-1 d-flex flex-row ">
        <div className="row col-md-12" >
        <div className="align-items-center col-xlg-6 col-lg-8 col-md-12     ">
          <button className="btn noBorder">
            <span className="mx-1">
              <IoIosArrowDropdown />
            </span>
            <span>Hi I'm Abdulaziz</span>
          </button>
          <img
            className="profile-img mx-1 "
            src={require("../assets/images/reactLogo.jpeg")}
          />
        </div>
        <div className="col-xlg-6 col-lg-4   col-md-12  ">
          <button className="btn noBorder">
            <TbMessages />{" "}
          </button>
          <button className="btn noBorder">
            <span>
              <FaRegBell />{" "}
            </span>
          </button>
          <button className="btn noBorder">
            <span>
              <GrCart />{" "}
            </span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
