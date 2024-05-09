import React from "react";
import { Link } from "react-router-dom";


export default function FormSign5() {
    
    return(
        <div  className="mycomponent" >
        <div className='mycomponent-container'>
        
            <div className='ml-44'>
                <img className='' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/435239961_1488575292013838_2408337344824373066_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHEWmtJVOTPBppdkth8fyn0Z2LOkZPlVfNnYs6Rk-VV8xl8ofWKmFVGqXir03pEOOuis7KrBrqxVojqHtd9xiwU&_nc_ohc=3t4e3zO8tKAQ7kNvgG4Fqte&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHWRHFVb1HuJ80AeH0OkeFaUkTN3mgsa3qHqWTcj1DZHg&oe=665263F6' alt='avatar' />
      </div>
        <div className="text-red-500  pb-7  font-bold">Bạn có chữ ký số hay không?<hr/></div>
        <form>
     
              
                <div className="">
                <div className='font-bold font-display text-2xl pl-380px flex text-red-500 '>
                <label htmlFor='first-name ' className='form-label  pl-28'>
                  Bạn có chữ ký số không?
                </label>
                </div>

   </div>            
   </form>  
   <div className="flex formsign4-btn pt-20">
        <Link to='/FormSign6'>    
                <button type='submit' className='hover:bg-red-500 formsign5next-btn rounded font-display'>
                Không, tải file đăng ký
                </button>
        </Link>
        <div  className=" pl-5">
        <Link to='/FormSign6'>          
                <button type='submit' className='hover:bg-red-500 formsign5previous-btn rounded font-display '>
                Có
                </button>
        </Link>
        </div>
        </div>

<div className="mt-32">
        <div className="bg-red-200 font-note ml-16 pt-1 pl-5 mr-10 h-9 text-red-600 italic font-display font-semibold text-sm  ">
          Hệ thống sử dụng chữ ký số chuyên dùng do Ban cơ yếu Chính phủ cung cấp. Nếu bạn không có chữ ký số hãy chọn "Không, tải file đăng ký", nếu bạn có chữ ký số hãy chọn "Có" và ấn tiếp.</div>   
        </div>
        </div>
    </div>
   
    )
  
}

