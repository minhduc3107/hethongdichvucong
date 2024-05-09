import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


export default function FormSign1() {
    
    return(
        <>
         <div  className="mycomponent" >
        <div className='mycomponent-container'>
        <div className='ml-48'>
                <img className='h-32' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/435243282_242979675567101_9093049263483166177_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeETHSj0SfGFSugCcX71gbZdKgCTIWBZuHIqAJMhYFm4ctfzU3jShm7YQ_TS4I6ACdMITs1jpjlt_xn5KD3JbQ8_&_nc_ohc=VB7QoJ76Fz8Ab7sjSkF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdURdHcpPcgIERqCFa2I1NSlqWt7_tkzVyt6iEGeylBsuQ&oe=66405D8E' alt='avatar' />
      </div>
        <div className="text-red-500  pb-7  font-bold">Thông tin người đăng ký<hr/></div>
        
        <form >
            <div className="grid grid-cols-3 ">
            <div>
            <Form > 
                <Form.Group className="font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900" >Họ và Tên <p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control placeholder="Nhập họ và tên"  className="changepw-control mb-3"   />
            </Form.Group>
            </Form>
            </div>
               
          
            <div>
            <Form > 
                <Form.Group className="font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label  className="text-blue-900">Số CMND/CCCD <p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control placeholder="Nhập số CMND/CCCD" className="changepw-control"   />
            </Form.Group>
            </Form>
            </div>
               
            <div>
            <Form > 
                <Form.Group className=" font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label  className="text-blue-900">Ngày sinh (ngày/tháng/năm)<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control placeholder="Nhập ngày/tháng/năm " className="changepw-control "   />
            </Form.Group>
            </Form>
            </div>
            <div>
            <Form > 
                <Form.Group className="font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label  className="text-blue-900">Chức vụ<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control  placeholder="Nhập chức vụ " className="changepw-control mb-3 "   />
            </Form.Group>
            </Form>
            </div>
               
            <div>
            <Form > 
                <Form.Group className=" font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label  className="text-blue-900">Đơn vị công tác<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control  placeholder="Nhập đơn vị công tác " className="changepw-control"   />
            </Form.Group>
            </Form>
            </div>

            <div>
            <Form > 
                <Form.Group className="font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label  className="text-blue-900">Địa chỉ<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control  placeholder="Nhập thông tin địa chỉ" className="changepw-control "   />
            </Form.Group>
            </Form>
            </div>
   
            <div>
            <Form > 
                <Form.Group className="mb-10 font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900">Điện thoại di động<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control placeholder="Nhập số điện thoại di động "className="changepw-control"   />
            </Form.Group>
            </Form>
            </div>
               
            <div>
            <Form > 
                <Form.Group className="font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label  className="text-blue-900">Thư điện tử <p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control placeholder="you@example.com"className="changepw-control"   />
            </Form.Group>
            </Form>
            </div>  
            </div> 
   </form>  

    <div className="flex formsign1-btn  pt-4">
        <Link to='/register'>    
                <button type='submit' className='hover:bg-red-500 formsignnext-btn rounded font-display'>
                    Quay lại
                </button>
        </Link>
        <div  className=" pl-5">
        <Link to='/FormSign2'>          
                <button type='submit' className='hover:bg-red-500 formsignprevious-btn rounded font-display '>
                    Tiếp
                </button>
        </Link>
        </div>
    </div>

        
        </div>
    </div>
   
    </>
    );
  
}

