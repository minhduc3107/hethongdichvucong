import React from "react";
import {Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { FaKey } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
export default function Nav()  {
        return(
            <div className='nav-nav flex bg-white font-display1'>

        <Link to='home'>
            <button className='flex hover:text-red-500 text-blue-900  text-base fontnav-nav font-bold   h-12 '  >    
    
    <div className="text-xl mr-1 text-blue-900 ">
    < AiFillHome/> 
    </div>
    Trang chủ
            </button>
            </Link>
            <Link to='changepw'>
            <button className='flex hover:text-red-500 text-base text-blue-900 	fontnav-nav font-bold  ' >
            <div className="text-xl mr-1 text-blue-900 ">
            <FaKey/> 
            </div>
           Đổi mật khẩu
           </button>
           </Link>
           <Link to='forgetpw'>
            <button className='flex hover:text-red-500 text-base text-blue-900  	fontnav-nav font-bold  pl-5 ' >
            <div className="text-xl  mr-1 text-blue-900  ">
    <  RiLockPasswordFill/> 
    </div>
          Quên mật khẩu
           </button>
           </Link>
           
           <Link to='hdsd'>
        <button  className='flex hover:text-red-500 text-blue-900  text-base fontnav-nav font-bold  pl-5' >
        <div className="text-xl mr-1 text-blue-900 ">
    <  AiFillQuestionCircle/> 
    </div>
     Hướng dẫn sử dụng
        </button>
        </Link>
       
        </div>
        )
    }


