import React from "react";



export default function ChangePassword() {
    
    return(
        <div  className="mycomponent" >
        <div className='mycomponent-container'>
          <div className="changepw-page">
            <div className="changepw-form-container">
        <div className="text-red-500 pb-7  font-bold">Đổi mật khẩu<hr/></div>
        <form>
     
              
                <div className="">
                <div className='font-bold flex'>
                <label htmlFor='first-name ' className='formpw-label'>
                   Tài khoản
                </label>
                <input
                id='first-name'
                className='changepw-control mb-4 mr-20'
                type='text'
                name='tendangnhap'
            
                />
            </div>
  
            
      
  <div className='mb-2 font-bold flex'>
                <label htmlFor='last-name' className='formpw-label' >
                     Mật khẩu cũ 
                </label>
                <input
                id='password'
                className='changepw-control mb-4 mr-20'
                type='password'
                name='password' 
                        
                />
                </div>
  <div className='mb-2 font-bold flex'>
                <label htmlFor='last-name' className='formpw-label' >
                     Mật khẩu mới 
                </label>
                <input
                id='password'
                className='changepw-control mb-4 mr-20'
                type='password'
                name='password' 
                       
                />
                </div>
      <div className='mb-2 font-bold flex'>
                <label htmlFor='last-name' className='formpw-label' >
                     Nhập lại mật khẩu
                </label>
                <input
                id='password'
                className='changepw-control mr-20'
                type='password'
                name='password' 
                         
                />
                </div>
                </div>
                

        </form>  
        
        <button type='submit' className='changepw-btn hover:bg-red-500 '>
                   Cập nhật
                </button>
              
        </div>
    </div>
    </div>
    </div>
    )
  
}

