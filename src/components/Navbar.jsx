import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import alclinic from '../assets/imgs/logo.ico';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../styles/navbar.css';
import imageVector from '../assets/imgs/doctor.png';
import Axios from 'axios';

const Navbar = ({showSideNav , setShowSideNav}) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserFromAPI();
  },[])
  
  async function getUserFromAPI() {
    let { data } = await Axios.get("http://localhost/alclinic/getUser.php");
    setUser(data[0]);
  }

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
              <h5>{user.first_name}</h5>
              <div className='user_image'>
                { user?.image !== undefined ? <img src={`http://localhost/alclinic/uploads/${user.image}`} alt={user.first_name} /> : <img src={imageVector} alt={'user_image'} /> }
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