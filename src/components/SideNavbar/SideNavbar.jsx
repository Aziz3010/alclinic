import React from 'react';
import { Link } from 'react-router-dom';
import st from './SideNavbar.module.css';
import alclinic from '../../assets/imgs/logo.ico';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';
import BoyIcon from '@mui/icons-material/Boy';
import StorageIcon from '@mui/icons-material/Storage';
import GirlIcon from '@mui/icons-material/Girl';
import CloseIcon from '@mui/icons-material/Close';

const SideNavbar = ({ showSideNav, setShowSideNav }) => {
  return (
    <>
      <div onClick={() => setShowSideNav(!showSideNav)} className={`${st.close_sideNav} close_sideNav_media`}><CloseIcon /></div>

      <div className={st.sideNavbar_logo}>
        <img src={alclinic} alt="alclinic" />
      </div>

      <ul className={st.sideNavbar_ul}>
        <li><Link to='/login'><LockOpenIcon />تسجيل الدخول</Link></li>
        <li><Link to='/home'><HomeOutlinedIcon />الصفحة الرئيسية</Link></li>
        <li><Link to='/bookings'><CalendarMonthOutlinedIcon />الحجوزات</Link></li>
        <li><Link to='/patients'><AirlineSeatReclineExtraOutlinedIcon />المرضي</Link></li>
        <li><Link to='/doctors'><BoyIcon />الأطباء</Link></li>
        <li><Link to='/receptionists'><GirlIcon />الإستقبال</Link></li>
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