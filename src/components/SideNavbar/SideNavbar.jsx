import React from 'react';
import { Link } from 'react-router-dom';
import st from './SideNavbar.module.css';
import alclinic from '../../assets/imgs/logo.ico';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LockIcon from '@mui/icons-material/Lock';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';
import BoyIcon from '@mui/icons-material/Boy';
import StorageIcon from '@mui/icons-material/Storage';
import GirlIcon from '@mui/icons-material/Girl';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const SideNavbar = ({ showSideNav, setShowSideNav }) => {

  const handleDropDown = (e) => {
    const parentElement = e.target.parentElement;
    const arrow = e.target.nextElementSibling;
    const nextParentSibling = parentElement.nextElementSibling;
    nextParentSibling.classList.toggle('d-block');

    // rotate the arrows
    const arrowStyle = getComputedStyle(arrow);
    if (arrowStyle.transform === 'matrix(1, 0, 0, 1, 0, 0)') {
      arrow.style.transform = "matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)";
      parentElement.style.borderBottom = "1px solid transparent";
    } else {
      arrow.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
      parentElement.style.borderBottom = "1px solid #fefefe";
    }
  }

  return (
    <>
      <div onClick={() => setShowSideNav(!showSideNav)} className={`${st.close_sideNav} close_sideNav_media`}><CloseIcon /></div>
      <div className={st.sideNavbar_logo}>
        <img src={alclinic} alt="alclinic" />
      </div>

      <ul className={st.sideNavbar_ul}>
        <li><Link to='/home'><HomeOutlinedIcon />الصفحة الرئيسية</Link></li>
        <li><Link to='/bookings'><CalendarMonthOutlinedIcon />الحجوزات</Link></li>
        <li><Link to='/patients'><AirlineSeatReclineExtraOutlinedIcon />المرضي</Link></li>


        <li className={st.drop}>
          <Link onClick={(e) => handleDropDown(e)} to='/doctors'><BoyIcon />الأطباء</Link>
          <ChevronLeftIcon />
        </li>
        <ul className={st.drop_down}>
          <li><Link to='/receptionists'><GirlIcon />موظف1</Link></li>
          <li><Link to='/receptionists'><GirlIcon />موظف2</Link></li>
          <li><Link to='/receptionists'><GirlIcon />موظف3</Link></li>
        </ul>


        <li className={st.drop}>
          <Link onClick={(e) => handleDropDown(e)} to='/receptionists'><GirlIcon />الإستقبال</Link>
          <ChevronLeftIcon />
        </li>
        <ul className={st.drop_down}>
          <li><Link to='/receptionists'><GirlIcon />موظف1</Link></li>
          <li><Link to='/receptionists'><GirlIcon />موظف2</Link></li>
          <li><Link to='/receptionists'><GirlIcon />موظف3</Link></li>
        </ul>


        <li><Link to='/financial'><AttachMoneyIcon />الحسابات</Link></li>
        <li><Link to='/store'><StorageIcon />المخزن</Link></li>
        <li><Link to='/logout'><LockIcon />تسجيل الخروج</Link></li>
        <li className='mt-5 mb-4'>
          <div className="input-group-sm">
            <select className="form-select" id="inputGroupSelect01">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </li>
      </ul>


    </>
  )
}

export default SideNavbar