import { Link } from "react-router-dom";
import React from 'react';

export default function FormSign4() {

 
    return(
        <>
           <div  className="componentformsign4" >
        <div className='componentformsign4-container'>
        <div className='ml-44'>
                <img className='h-32' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/439714032_446051194623301_9143901454144959752_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFA2sJimu-NL2AMZBzpkqNIXfOxP_j1Ispd87E_-PUiytaDwiClhW8oDqayerJhhU_QlOEVQdNkYy_T2IBKdfnY&_nc_ohc=EUvVvRa_dgoQ7kNvgHJdjjO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE_2WZW88Ap3HmExkp-CUlxxi4h2yTS9UkoIUdI7c0Chg&oe=66525658
' alt='avatar' />
      </div>
        <div className="text-red-500  font-bold">Thông tin người đăng ký<hr/></div>
      
    <div className="otp-parent-container ">
  <div class="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md ">
    <h1 class="text-2xl font-semibold text-center mb-6">Nhập mã OTP để xác nhận đăng ký tài khoản</h1>
    <p class="text-gray-600 text-center mb-4"> Mã OTP đã được gửi tin nhắn về số điện thoại 09XXXXX123</p>
    <div class="grid grid-cols-5 gap-x-4 my-2">
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">1</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">9</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">6</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">4</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">3</span>
      </div>
    </div>
    <div class="flex items-center flex-col justify-between mb-6">
      <p class="text-gray-600 text-sm">Bạn chưa nhận được mã?</p>
      <div class="flex items-center space-x-2">
        <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
           Yêu cầu cuộc gọi </button>
        <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
            Yêu cầu lại sau  (00:00:36)</button>
      </div>
    </div>
    <button class="w-full px-4 py-2 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-red-500">
        Xác thực</button>
  </div>
  </div>     
          

          

   <div className="flex formsign4-btn pl-115px mb-2">
        <Link to='/FormSign3'>    
                <button type='submit' className='hover:bg-red-500 formsignnext-btn rounded font-display'>
                    Quay lại
                </button>
        </Link>
        <div  className=" pl-5">
        <Link to='/FormSign5'>          
                <button type='submit' className='hover:bg-red-500 formsignprevious-btn rounded font-display '>
                    Tiếp
                </button>
        </Link>
        </div>
        </div>
  </div>
    </div>
   
    </>
    )
  
}

