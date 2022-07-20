import React from 'react';
import Helmet from '../components/Helmet';
import '../styles/login.css';
import { Link } from 'react-router-dom';

const Login = ({setRegisterComponent}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "asdsadqwdeqwdaxc";
    localStorage.setItem("userTokenLocalStorage",JSON.stringify(token))
    console.log("Send token to LS");
    window.location.replace('/home');
  }

  return (
    <Helmet title='تسجيل الدخول'>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className='title_form_login'>
              <h2 className='text-center mb-4'>تسجيل الدخول</h2>
              <form onSubmit={handleSubmit} className='form_login'>
                <input type="email" className="form-control mb-3" placeholder='البريد الإلكتروني' />
                <input type="password" className="form-control mb-3" placeholder='كلمة المرور' />
                <div className="input-group mb-4">
                  <div className="input-group-text w-100">
                    <input className="form-check-input mt-0" id='remember' type="checkbox" />
                    <label htmlFor="remember" className='m-0 me-2 w-100'>تذكرني</label>
                  </div>
                </div>
                <button type='submit' className='btn btn-primary'>تسجيل الدخول</button>
                <p className='m-0 mt-4'>لا يوجد لديك حساب؟
                  <Link onClick={()=>setRegisterComponent(true)} to="/register"> إشترك الأن</Link>
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