import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect, useRef } from 'react'; 
import { TfiReload } from "react-icons/tfi";



 function FormSign2() {
    const [captchaText, setCaptchaText] = useState(''); 
    const [userInput, setUserInput] = useState(''); 
    const canvasRef = useRef(null); 

    useEffect(() => { 
      
    }, []); 

    const generateRandomChar = (min, max) => 
        String.fromCharCode(Math.floor 
            (Math.random() * (max - min + 1) + min)); 
  
    const generateCaptchaText = () => { 
        let captcha = ''; 
        for (let i = 0; i < 3; i++) { 
            captcha += generateRandomChar(65, 90); 
            captcha += generateRandomChar(97, 122); 
            captcha += generateRandomChar(48, 57); 
        } 
        return captcha.split('').sort( 
            () => Math.random() - 0.5).join(''); 
    }; 
  
    const drawCaptchaOnCanvas = (ctx, captcha) => { 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)']; 
        const letterSpace = 150 / captcha.length; 
        for (let i = 0; i < captcha.length; i++) { 
            const xInitialSpace = 25; 
            ctx.font = '20px Roboto Mono'; 
            ctx.fillStyle = textColors[Math.floor( 
                Math.random() * 2)]; 
            ctx.fillText( 
                captcha[i], 
                xInitialSpace + i * letterSpace, 
                  
                // Randomize Y position slightly 
                Math.floor(Math.random() * 16 + 25), 
                100 
            ); 
        } 
    }; 
  
    const initializeCaptcha = (ctx) => { 
        setUserInput(''); 
        const newCaptcha = generateCaptchaText(); 
        setCaptchaText(newCaptcha); 
        drawCaptchaOnCanvas(ctx, newCaptcha); 
    }; 
  
    const handleUserInputChange = (e) => { 
        setUserInput(e.target.value); 
    }; 
  
    const handleCaptchaSubmit = () => { 
        if (userInput === captchaText) { 
            alert('Success'); 
        } else { 
            alert('Incorrect'); 
            const canvas = canvasRef.current; 
            const ctx = canvas.getContext('2d'); 
            initializeCaptcha(ctx); 
            
        } 
    }; 
    return(
     
        <> <div className="signin2-page" >
        <div className='signin2-form-container'>
        <div className='ml-48'>
                <img className='h-32' src='https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/434596205_1595089237980004_6592596802528216822_n.png?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGhlzREXgSqt_jbpE9Pl3zdLGEg3f5tXu8sYSDd_m1e73EJ-mHGUkGmkExwiWp-SmTCGG5zhx4jNgQw-iTREv5Q&_nc_ohc=IEuKEglvDS8Ab5ALTTb&_nc_ht=scontent.fhan2-5.fna&oh=03_AdWM9Dosp9esvMGt0Mq5HchxIINqupLeNkaVIk2WdpKxrg&oe=66408B1A' alt='avatar' />
      </div>
        <div className="text-red-600  pb-3  font-bold">Đăng ký tài khoản <hr/></div>
        <form>
     
              
                <div class="grid grid-cols-3">
                <div>
  <form className="">
                    <label className="form-label font-bold font-display text-blue-900 ">Thuộc Bộ,ngành/địa phương<p className="text-red-500 ml-1">*</p></label>
                    <select className="changepw-control font-display mb-2 ">             
                    <option value="" disabled selected hidden>--Chọn đơn vị--</option>
                    <option >Bộ,ngành/Cơ quan trung ương </option>
                    <option >Địa phương</option>
                    </select>
                </form>
            
                </div>
  
            <div className=' font-bold'>
            <Form > 
                <Form.Group className=" font-display  font-bold text-blue-900" controlId="exampleForm.ControlInput1">
                <Form.Label>Tên đơn vị<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control className="changepw-control "    />
            </Form.Group>
            </Form>
            </div>

            
            <div>
            <form className="">
                    <label className="form-label font-bold font-display text-blue-900">Cơ quan chủ quản<p className="text-red-500 ml-1">*</p></label>
                    <select className="changepw-control font-display ">             
                    <option value="" disabled selected hidden>--Chọn đơn vị--</option>
                    <option >Bộ công an</option>
                    <option >Bộ công thương</option>
                    <option >Bộ giáo dục và đào tạo</option>
                    </select>
                </form>
            </div>

  <div>
  <form className="">
                    <label className="form-label font-bold font-display text-blue-900 ">Đơn vị thuộc CQCQ<p className="text-red-500 ml-1">*</p></label>
                    <select className="changepw-control font-display ">             
                    <option value="" disabled selected hidden>--Chọn đơn vị--</option>
                    <option >Cục kế hoạch và đầu tư  </option>
                    <option >Cục cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ</option>
                    </select>
                </form>
            
                </div>

                <div className=' '>
                <form className="">
                    <label className="form-label font-bold font-display text-blue-900 ">Cơ quan nhận báo cáo giám sát<p className="text-red-500 ml-1">*</p></label>
                    <select className="changepw-control font-display ">             
                    <option value="" disabled selected hidden>--Chọn đơn vị--</option>
                    <option >Bộ công an</option>
                    <option >Bộ công thương</option>
                    <option >Bộ giáo dục và đào tạo</option>
                    </select>
                </form>
            </div>
  
            <div className=''>
            <form className="">
                    <label className="form-label font-bold font-display text-blue-900">Đơn vị thuộc cơ quan nhận báo cáo <p className="text-red-500 ml-1">*</p></label>
                    <select className="changepw-control font-display mb-2 ">             
                    <option value="" disabled selected hidden>--Chọn đơn vị--</option>
                    <option >Bộ công an</option>
                    <option >Bộ công thương</option>
                    <option >Bộ giáo dục và đào tạo</option>
                    </select>
                </form>
    
            </div>

            <div className='font-bold'>
            <Form > 
                <Form.Group className=" font-bold font-display" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900">Họ và tên người đứng đầu<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control className="changepw-control mb-2 "    />
            </Form.Group>
            </Form>
            </div>


            <div  className=''>
            <Form > 
                <Form.Group className=" font-bold font-display" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900">Số CMTND/CCCD của người đứng đầu<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control className="changepw-control"    />
            </Form.Group>
            </Form>
        
            
            </div>

            
            <div  className=' '>
            <Form > 
                <Form.Group className=" font-bold font-display" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900">Số ĐTDĐ của người đứng đầu<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control className="changepw-control "    />
            </Form.Group>
            </Form>
            </div>
            <div  className='font-bold  '>
            <Form > 
                <Form.Group className="font-bold font-display" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900">Thư điện tử của người đứng đầu<p className="text-red-500 pl-1">*</p></Form.Label> 
                <Form.Control className="changepw-control "    />
            </Form.Group>
            </Form>
            </div>

            <div className='font-bold'>
            <Form > 
                <Form.Group className="font-bold font-display" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900">Bản chụp Quyết định thành lập/Quyết định <br/>về chức năng nhiệm vụ của cơ quan</Form.Label>        
                      
            </Form.Group>
            </Form>
            </div>
            <Form > 
                <Form.Group className="font-bold font-display" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-blue-900">Mã bảo vệ</Form.Label> 
                <div className="flex">
                <Form.Control className="formcaptcha" onChange={handleUserInputChange}/>
              <div className="container"> 
              <div className="flex"> 
              <TfiReload  className=" ml-4 mr-5 mt-2" onClick={ 
                      () => initializeCaptcha( 
                          canvasRef.current.getContext('2d'))} />
                  <canvas ref={canvasRef} 
                      width="180"
                      height="40"> 
                  </canvas> 
                  </div>
              </div> 
            

          </div> 
            </Form.Group>
            </Form>  
            </div>
            
        </form>  
       
<div class="mt-7 border border-dashed border-gray-500 relative">
    <input type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-16 z-50  "/>
    <div class="text-blue-900 text-center p-10 absolute top-0 right-0 left-0 m-auto">
        <h4>
           Kéo thả tập tin vào để tải lên
            <br/>hoặc
        </h4>
        <p class="">Chọn tập tin </p>
    </div>
</div>
        <div className="flex pl-580px mt-6 ">
        <Link to='/FormSign1'>    
                <button type='submit' className='hover:bg-red-500 formsignnext-btn rounded font-display'>
                    Quay lại
                </button>
        </Link>
        <div  className=" pl-5">
        <Link to='/FormSign3'>          
                <button  onClick={handleCaptchaSubmit} type='submit' className='hover:bg-red-500 formsignprevious-btn rounded font-display '>
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
export default FormSign2;
