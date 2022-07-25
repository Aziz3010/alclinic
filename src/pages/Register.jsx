import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import '../styles/register.css';

const Register = ({ setLoginComponent }) => {
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
                <input type="number" className="form-control mb-3" placeholder='الهاتف' />
                <input type="email" className="form-control mb-3" placeholder='البريد الإلكتروني' />
                <input type="password" className="form-control mb-3" placeholder='كلمة المرور' />

                <div className="mb-3">
                  <input className="form-control" type="file" id="personal_picture"/>
                </div>

                <div className="input-group mb-4 gap-3">
                  <div className="input-group-text rounded align-items-center gap-1">
                    <input className="form-check-input mt-0" type="radio" name="position" value="doctor" id="doctor" />
                    <label htmlFor='doctor'>طبيب</label>
                  </div>
                  <div className="input-group-text rounded align-items-center gap-1">
                    <input className="form-check-input mt-0" type="radio" name="position" value="employee" id="employee" />
                    <label htmlFor='employee'>مسؤول إستقبال</label>
                  </div>
                </div>

                <button type='submit' className='btn btn-primary'>تسجيل</button>

                <p className='m-0 mt-4'>لدى حساب بالفعل!
                  <Link onClick={() => setLoginComponent(true)} to="/login"> تسجيل دخول</Link>
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