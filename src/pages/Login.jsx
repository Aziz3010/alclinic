import React, { useState } from 'react';
import Helmet from '../components/Helmet';
import '../styles/login.css';
import { Link } from 'react-router-dom';
// import Axios from 'axios';

const Login = ({ setRegisterComponent }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let inputsData = {
      "email": email,
      "password": password,
    };
    console.log(inputsData);
    // sendDataToAPI(inputsData);

    // If checkBox is checked
    if (remember) {
      // here save data in localStorage and get it when open component again ------ put it in inputs value
      console.log('Remember me');
    } else {
      // here remove data from localStorage
      console.log('Not remember me');
    }

    const token = "asdsadqwdeqwdaxc";
    localStorage.setItem("userTokenLocalStorage", JSON.stringify(token))
    console.log("Send token to LS");
    // window.location.replace('/home');
    window.location.replace('/receptionists');
  }

  // call api
  // const sendDataToAPI = async (inputsData) => {
  //   const request = await Axios.post("http://localhost/alclinic/login.php", inputsData);
  //   const response = await request.json();
  //   console.log(response);
  // };

  return (
    <Helmet title='تسجيل الدخول'>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className='title_form_login'>
              <h2 className='text-center mb-4'>تسجيل الدخول</h2>
              <form onSubmit={handleSubmit} className='form_login'>
                <input name='email' onChange={(e) => setEmail(e.target.value)} type="email" className="form-control mb-3" placeholder='البريد الإلكتروني' />
                <input name='password' onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mb-3" placeholder='كلمة المرور' />
                <div className="input-group mb-4">
                  <div className="input-group-text w-100">
                    <input onChange={(e) => setRemember(true)} className="form-check-input mt-0" id='remember' type="checkbox" />
                    <label htmlFor="remember" className='m-0 me-2 w-100'>تذكرني</label>
                  </div>
                </div>
                <button className='btn btn-primary'>تسجيل الدخول</button>
                <p className='m-0 mt-4'>لا يوجد لديك حساب؟
                  <Link onClick={() => setRegisterComponent(true)} to="/register"> إشترك الأن</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Login;