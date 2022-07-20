import React from 'react';
import { Link } from 'react-router-dom';
import alclinic from '../assets/imgs/logo.ico';
import userImg from '../assets/imgs/doctor.png';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../styles/navbar.css';

const Navbar = ({showSideNav , setShowSideNav}) => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between">

          <div className='col-3'>
            <Link className='logo_text' to='/home'>
              <h5>العيادة</h5>
              <img src={alclinic} alt="alclinic" />
            </Link>
          </div>

          <div className='col-6'>
            <div className='user' >
              <h5>أحمد</h5>
              <div className='user_image'>
                <img src={userImg} alt="user" />
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='menu'>
              {showSideNav === true ? <MenuIcon onClick={()=>setShowSideNav(!showSideNav)} /> : <MenuOpenIcon onClick={()=>setShowSideNav(!showSideNav)} />}
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar;