import { Link } from "react-router-dom";
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineMailLock } from "react-icons/md";

export default function Email() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
           <div  className="componentformsign4" >
        <div className='componentformsign4-container'>
        <div className='ml-44'>
                <img className='h-32' src='https://scontent.xx.fbcdn.net/v/t1.15752-9/439714032_446051194623301_9143901454144959752_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFA2sJimu-NL2AMZBzpkqNIXfOxP_j1Ispd87E_-PUiytaDwiClhW8oDqayerJhhU_QlOEVQdNkYy_T2IBKdfnY&_nc_ohc=EUvVvRa_dgoQ7kNvgHJdjjO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE_2WZW88Ap3HmExkp-CUlxxi4h2yTS9UkoIUdI7c0Chg&oe=66525658' alt='avatar' />
      </div>
            <div className="otp-parent-container ">
            <div class="w-full mt-20 max-w-md px-8 py-10 bg-white rounded-lg shadow-md ">
            <div>
            <Form > 
                <Form.Group className="font-display font-semibold" controlId="exampleForm.ControlInput1">
                <Form.Label  className="text-blue-900">Thư điện tử <p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control placeholder="you@example.com"className="changepw-control"   />
            </Form.Group>
            </Form>
            </div>  
            <button onClick={handleShow} class="w-full font-display  mt-10 px-4 py-2 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-red-500" >Tiếp theo</button>

            </div>
            </div>   

<div>
            
            <Modal className="mt-80" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="font-display text-xl font-semibold text-red-500  " >Thư điện tử</Modal.Title>
              </Modal.Header>
            <Form > 
                <Form.Group className="font-display font-semibold  " controlId="exampleForm.ControlInput1">
                <Form.Label  className=" pl-28 pt-3 text-2xl text-blue-900">Đặt lại mật khẩu</Form.Label> 
                <MdOutlineMailLock className="size-24 ml-48 "/>
                <Form.Label  className="text-blue-900 pl-12 ">Mã xác minh đã được gửi đến địa chỉ email</Form.Label> 
                <Form.Label  className="text-red-500 pl-32">you@example.com</Form.Label> 
                <Form.Label  className="text-blue-900 pl-32">Vui lòng xác minh.</Form.Label> 
            </Form.Group>
            </Form>
            <Link to='/FormSign5'> 
            <button class="w-full font-display mt-10 px-4 py-2 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-red-500">
          OK</button>
          </Link>
            


              </Modal>
              </div>
            <div className="flex email-btn pl-48   ">
        <Link to='/FormSign3'>    
                <button type='submit' className='hover:bg-red-500 formsignnext3-btn rounded font-display'>
                    Quay lại
                </button>
        </Link>
        </div>
  </div>
  </div>
       
    </>
    )
  
}

