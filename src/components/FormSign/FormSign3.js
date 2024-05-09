import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export default function FormSign3() {
  


  return (
    <>
           <div  className="mycomponent" >
        <div className='mycomponent-container'>
        
            <div className='ml-44'>
                <img className='' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/439259509_2416076745244912_7354759039065417749_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEqiKpyn6TJhyOxFn26EOtRyMQUXHGzSwTIxBRccbNLBO6IoWFFOK4i_Pu446PDtNabdUERmdVuc7NAN1v0ZubR&_nc_ohc=pEtZo0FEGm0Q7kNvgHE1Oka&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFQCL4cLox1Dd_ZRmLs1s7C_t4hrk_E15UAyzLW-NMc_w&oe=66525B86' alt='avatar' />
      </div>
            <form action="/action_page.php">
            <label className=" font-display formdangky3-label text-2xl font-bold pt-20  text-red-500" >Bạn muốn xác nhận tài khoản qua email hay số điện thoại? </label>
              
            <Form >
              
                <Form.Group className="text-xl pl-480px  pt-20 font-display">
                {['radio'].map((type) => (
                <div  >
                <Link to="/email">
                <Form.Check
                    inline
                    className="text-blue-900 hover:text-blue-700"
                    label="Thư điện tử"
                    name="group1"
                    type={type}  
                />
                </Link>
                <Link to="/authotp">
                <Form.Check
                    inline
                    className="pl-14 text-blue-900 hover:text-blue-700"
                    label="Số điện thoại"
                    name="group1"
                    type={type}         
                />
                 </Link>
                </div>               
            ))}
            </Form.Group> 
            
    </Form>
            </form> 
            <div className="flex formsign3-btn pl-20   ">
        <Link to='/FormSign2'>    
                <button type='submit' className='hover:bg-red-500 formsignnext3-btn rounded font-display'>
                    Quay lại
                </button>
        </Link>
        <div  className=" pl-5">
        <Link to='/authotp'>          
                <button type='submit' className='hover:bg-red-500 formsignprevious3-btn rounded font-display '>
                    Tiếp
                </button>
        </Link>
        </div>
        </div>
            
            </div>
            <div>

      </div> 
      </div>
   
    </>
  );
}
