import React from "react";
import { Link } from "react-router-dom";


export default function FormSign6() {
    
    return(
        <div  className="mycomponent" >
        <div className='mycomponent-container'>
        <div className='formsign6-page'>
            <div className='formsign6-form-container'>
     
        <div className="text-red-500 font-semibold text-2xl pt-4 font-display text-center">Bạn đã hoàn thành đăng ký tài khoản sử dụng<br/> Hệ thống thông tin về Đầu tư sử dụng vốn nhà nước!</div> 
        <div className="pt-16 text-blue-800 text-lg	 font-display">Để được cấp tài khoản bạn thực hiện một trong hai cách sau:</div> 
        <div className="text-blue-800 text-lg font-display ">- Cách 1: Liên hệ với cơ quan chủ quản để cơ quan chủ quản sử dụng tài khoản đã được cấp để xác nhận thông tin đăng ký.</div> 
        <div className="text-blue-800 text-lg font-display">- Cách 2: In Phiếu đăng ký tài khoản bạn vừa tải về, lấy xác nhận của lãnh đạo đơn vị (ký tên, đóng dấu) và gửi về Trung tâm Tin học, Bộ Kế hoạch và Đầu tư theo địa chỉ: Số 6B Hoàng Diệu, Quán Thánh, Ba Đình, Hà Nội.</div> 
        <div className="text-blue-800 text-lg font-display">&ensp;Sau khi tài khoản được cấp chúng tôi sẽ gửi tài khoản vào email mà bạn đã cung cấp tại Bước 1. Bạn vui lòng kiểm tra thư điện tử để có thể sử dụng Hệ thống.</div> 
        <div className="text-blue-800  text-lg font-display"> &ensp;Trân trọng!</div> 
        <div className="flex pl-64 pt-9">

        <div  className=" pl-14">
        <Link to='/login'>          
                <button type='submit' className='hover:bg-red-500 formsignprevious-btn rounded font-display '>
                    Tiếp
                </button>
        </Link>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
  
}

