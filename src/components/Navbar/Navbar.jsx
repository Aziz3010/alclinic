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
              <h5>العيادة</h5>
              <img src={alclinic} alt="alclinic" />
            </Link>
          </div>

          <div className='col-6'>
            <div className={st.user} >
              <h5>أحمد</h5>
              <div className={st.user_image}>
                <img src={userImg} alt="user" />
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className={st.menu}>
              <i onClick={()=>setShowSideNav(!showSideNav)} className={showSideNav === true ? 'ri-menu-unfold-line' : 'ri-menu-fold-line'}></i>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar;