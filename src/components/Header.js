import React from "react";
import {Link } from 'react-router-dom'

export default function Header() {


  return (
    <div className="header">
    <div style={{ 
      backgroundImage: `url("https://dichvucong.mpi.gov.vn/assets/bg-header.d78c000b.jpg")` 
    }}>
   
    <div className=' flex '>
      <div className='ml-44'>
                <img className=' w-20 mt-3 mr-5' src='https://vudangmindu.000webhostapp.com/Image/logobkhdt.png' alt='avatar' />
      </div>
        <div>
       <h6  className='chu pt-4 mr-60 '>
        BỘ KẾ HOẠCH VÀ ĐẦU TƯ  </h6>
      <p className='text-white mb-6 font-bold text-xl'>HỆ THỐNG ĐĂNG KÝ TÀI KHOẢN</p>
        </div>
        <div className='mt-2 pl-96 '>        
        <Link to='register'>
        <button  className='   hover:text-sky-500 font-bold rounded  text-base	 h-10 w-32 bg-white ' >
        Đăng Ký 
        </button>
        </Link>

        <Link to='login'>
        <button   className=' hover:shadow-lg light:hover:shadow-black/50 rounded ml-2 font-bold mt-6 h-10 w-32 bg-#1d3463 text-#dc3440 text-base 	'>
        Đăng Nhập
        </button>
        </Link> 
        
        </div>
        </div>
        </div>
        </div>
  );
}
