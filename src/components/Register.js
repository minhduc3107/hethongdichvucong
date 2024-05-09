import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export default function SignUp() {

  return (
    <>
           <div  className="mycomponent" >
        <div className='mycomponent-container'>
       
            <form>
            <label className="formdangky-label font-display text-2xl font-bold pt-20   text-red-500" >
              CHỌN HỆ THỐNG ĐĂNG KÝ TÀI KHOẢN </label>
              

              <div className="pl-20">
            <Form >
                <Form.Group className="pl-16 pt-20 font-display">
                {['radio'].map((type) => (
                <div className="text-2xl formcheck-register text-blue-900 " >
                  <Link to="/FormSign1">
                <Form.Check
                    inline
                    className="hover:text-blue-700 "
                    label="Hệ thống thông tin về giám sát, đánh giá đầu tư"
                    name="group1"
                    type={type}  
                /> <br/>
                </Link>
                <Form.Check
                    inline
                    className="mt-3 hover:text-blue-700"
                    label="Hệ thống khác"
                    name="group1"
                    type={type}         
                />
                </div>               
            ))}
            </Form.Group> 
            
    </Form>
    </div>
            </form> 
            <Link to='/FormSign1'>    
            <button type='submit' id="bn1" name="submit" className='hover:bg-red-500 rounded submitregister-btn font-display '>
                        Tiếp
            </button>
            </Link>
                  
                   
            
            </div>
            <div>
      </div> 
      </div>
    
    </>
  );
}
