import './App.css';
import { Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from './components/Register';
import ChangePassword from './components/ChangePassword';
import ForgetPassword from './components/ForgetPassword';
import Home from './components/Home';
import HDSD from './components/HDSD';
import FormSign1 from './components/FormSign/FormSign1';
import FormSign2 from './components/FormSign/FormSign2';
import FormSign3 from './components/FormSign/FormSign3';
import FormSign4 from './components/FormSign/FormSign4';
import FormSign5 from './components/FormSign/FormSign5';
import FormSign6 from './components/FormSign/FormSign6';
import  Email  from './components/FormSign/Email';
import AuthOtp from './components/FormSign/AuthOtp';
function App() {
  return (
    <div className='App'>
        <Header />      
        <Nav/>  
        <Routes>     
        <Route path="/" element= { <Home/>} />
        <Route path="home" element= { <Home/>} />
        <Route path="email" element= { <Email/>} />
          <Route path="register" element= { <Register/>} />
          <Route path="authotp" element= { <AuthOtp/>} />  
          <Route path="login" element= { <Login/>} />
          <Route path="changepw" element= { <ChangePassword/>} /> 
          <Route path="forgetpw" element= { <ForgetPassword/>} />
          <Route path="hdsd" element= { <HDSD/>} />   
          <Route path="FormSign1" element= { <FormSign1/>} /> 
          <Route path="FormSign2" element= { <FormSign2/>} />   
          <Route path="FormSign3" element= { <FormSign3/>} />   
          <Route path="FormSign4" element= { <FormSign4/>} />   
          <Route path="FormSign5" element= { <FormSign5/>} />   
          <Route path="FormSign6" element= { <FormSign6/>} />                       
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;
