import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import '../styles/register.css';

const Register = ({setLoginComponent}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("a");
  }

  return (
    <Helmet title='التسجيل'>
            <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className='title_form_register'>

              <h2 className='text-center mb-4'>تسجيل حساب</h2>

              <form onSubmit={handleSubmit} className='form_register'>
                <input type="text" className="form-control mb-3" placeholder='الاسم الاول' />
                <input type="text" className="form-control mb-3" placeholder='الاول الثاني' />
                <input type="number" className="form-control mb-3" placeholder='الجوال' />
                <input type="email" className="form-control mb-3" placeholder='البريد الإلكتروني' />
                <input type="password" className="form-control mb-3" placeholder='كلمة المرور' />
                
                <button type='submit' className='btn btn-primary'>تسجيل</button>

                <p className='m-0 mt-4'>لدى حساب بالفعل!
                  <Link onClick={()=>setLoginComponent(true)} to="/login"> تسجيل دخول</Link>
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Register;