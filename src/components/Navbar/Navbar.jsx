import React from 'react';
import { Link } from 'react-router-dom';
import st from './Navbar.module.css';
import alclinic from '../../assets/imgs/logo.ico';
import userImg from '../../assets/imgs/doctor.png';

const Navbar = ({showSideNav , setShowSideNav}) => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between">

          <div className='col-3'>
            <Link className={st.logo_text} to='/home'>
              <img src={alclinic} alt="alclinic" />
              <h5>العيادة</h5>
            </Link>
          </div>

          <div className='col-6'>
            <div className={st.user} >
              <div className={st.user_image}>
                <img src={userImg} alt="user" />
              </div>
              <h5>أحمد</h5>
            </div>
          </div>

          <div className='col-3'>
            <div className={st.menu}>
              <i onClick={()=>setShowSideNav(!showSideNav)} className="ri-menu-fill"></i>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar;