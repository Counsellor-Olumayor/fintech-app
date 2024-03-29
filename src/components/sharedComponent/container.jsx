import React from 'react'
import SideNav from "../../components/sideNav";
// import Main from "../../components/main"; 
import Header from '../header';

const Container = ({children}) => {
  return (
    <div className="flex font-Poppins">
      <div className="w-[20%] sm:w-full">
        <SideNav />
      </div>

      <div className="bg-mainBG w-[80%] sm:w-full">
        <Header/>
        {children}
      </div>
    </div>
  )
}

export default Container