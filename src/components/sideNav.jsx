import React from "react";
import Logo from "../assets/Logo.png";
import { LiaHomeSolid } from "react-icons/lia";
import { ImStatsBars } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import { LiaCreditCardSolid } from "react-icons/lia";
import { BsGear } from "react-icons/bs";
import { RxExit } from "react-icons/rx";

const SideNav = () => {
  return (
    <div className="bg-frame bg-cover bg-no-repeat h-[100%]">
      <div className="flex flex-col items-center ">
        <img src={Logo} alt="" className="md:p-3 " />

        <div className="sm:p-4">
          <div className="flex items-center gap-5 pt-[3rem] hover:text-white md:px-3">
            <span>
              <LiaHomeSolid className="me"/>
            </span>
            <p className="sm:hidden ">Home</p>
          </div>
          <div className="flex items-center gap-5 pt-[3rem] hover:text-white md:px-3">
            <span>
              <ImStatsBars />
            </span>
            <p className="sm:hidden">Activity</p>
          </div>
          <div className="flex items-center gap-5 pt-[3rem] hover:text-white md:px-3">
            <span>
              <LiaCreditCardSolid />
            </span>
            <p className="sm:hidden">Bills</p>
          </div>
          <div className="flex items-center gap-5 pt-[3rem] hover:text-white md:px-3">
            <span>
              <BsArrowLeftRight />
            </span>
            <p className="sm:hidden">Transactions</p>
          </div>
          <div className="flex items-center gap-5 pt-[3rem] hover:text-white md:px-3">
            <span>
              <FiMail />
            </span>
            <p className="sm:hidden">Complaints</p>
          </div>
          <div className="flex items-center gap-5 pt-[3rem] hover:text-white md:px-3">
            <span>
              <BsGear />
            </span>
            <p className="sm:hidden">Settings</p>
          </div>
          <div className="flex items-center gap-5 mt-[6rem] hover:text-white md:px-3">
            <span>
              <RxExit />
            </span>
            <p className="sm:hidden">Log-out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
