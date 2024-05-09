import React from "react";
import * as Components from './Components';
import { Link } from "react-router-dom";




export default function SignUp() {
    
    const [signIn] = React.useState(true);
    return(

        <div  className="mycomponent" >
        <div className='mycomponent-container'>
            <div className="ml-40">
        <Components.Container>
            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form>
                 <Components.Title>Đăng nhập</Components.Title>
                       <Components.Input type='user' placeholder='Tên người dùng' />
                       <Components.Input type='password' placeholder='Mật khẩu' />
                       <Components.Anchor>   <Link to='/forgetpw'className="hover:text-sky-600">  Quên mật khẩu? </Link> </Components.Anchor>
                       <Components.Button className="hover:bg-red-500"><Link to='/home'>                      
                                  Đăng nhập
                          </Link></Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>


                    <Components.RightOverlayPanel className="bg-bokehoachvadautu " signinIn={signIn}>

                          <img className='w-20 ml-4 mb-4 mr-4' src='https://vudangmindu.000webhostapp.com/Image/logobkhdt.png' alt='avatar' />
                      <Components.Title>BỘ KẾ HOẠCH VÀ ĐẦU TƯ</Components.Title>
                      <Components.Paragraph>
                         Hệ thống đăng ký tài khoản
                      </Components.Paragraph>
                          <Components.GhostButton >
                          <Link to='/register'>                         
                                 Đăng ký  
                          </Link>
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
       </div>
       </div>
       </div>
    )
  
}

