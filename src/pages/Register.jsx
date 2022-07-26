import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import '../styles/register.css';
import Axios from 'axios';

const Register = ({ setLoginComponent }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [userImage, setUserImage] = useState('');
  const [position, setPosition] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let inputsData = {
      "first_name": firstName,
      "last_name": lastName,
      "phone": phone,
      "email": email,
      "age": age,
      "password": password,
      "user_image": userImage,
      "position": position
    };

    sendDataToAPI(inputsData);
  };

  // call api
  const sendDataToAPI = async (inputsData) => {
    const request = await Axios.post("http://localhost/alclinic/register.php",inputsData);
    const response = await request.json();
    console.log(response);
  };

  return (
    <Helmet title='التسجيل'>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className='title_form_register'>

              <h2 className='text-center mb-4'>تسجيل حساب</h2>

              <form onSubmit={handleSubmit} className='form_register'>
                <input name='first_name' onChange={(e)=>setFirstName(e.target.value)} type="text" className="form-control mb-3" placeholder='الاسم الاول' />
                <input name='last_name' onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control mb-3" placeholder='الاسم الثاني' />
                <input name='phone' onChange={(e)=>setPhone(e.target.value)} type="number" className="form-control mb-3" placeholder='الهاتف' />
                <input name='email' onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control mb-3" placeholder='البريد الإلكتروني' />
                <input name='age' onChange={(e)=>setAge(e.target.value)} type="number" className="form-control mb-3" placeholder='السن' />
                <input name='password' onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control mb-3" placeholder='كلمة المرور' />

                <div className="mb-3">
                  <input name='user_image' onChange={(e)=>setUserImage(e.target.value)} className="form-control" type="file" id="personal_picture"/>
                </div>

                <div className="input-group mb-4 gap-3">
                  <div className="input-group-text rounded align-items-center gap-1">
                    <input onChange={(e)=>setPosition(e.target.value)} name="position" className="form-check-input mt-0" type="radio" value="doctor" id="doctor" />
                    <label htmlFor='doctor'>طبيب</label>
                  </div>
                  <div className="input-group-text rounded align-items-center gap-1">
                    <input onChange={(e)=>setPosition(e.target.value)} name="position" className="form-check-input mt-0" type="radio" value="employee" id="employee" />
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