import React from 'react';
import { Link } from 'react-router-dom';
import st from './SideNavbar.module.css';
import alclinic from '../../assets/imgs/logo.ico';

const SideNavbar = () => {
  return (
    <>
      <div className={st.sideNavbar_logo}>
        <img src={alclinic} alt="alclinic" />
      </div>
      <ul className={st.sideNavbar_ul}>
        <li><Link to='/home'><i className="ri-home-4-line"></i>الصفحة الرئيسية</Link></li>
        <li><Link to='/bookings'><i className="ri-calendar-2-line"></i>الحجوزات</Link></li>
        <li><Link to='/patients'><i className="ri-hotel-bed-line"></i>المرضي</Link></li>
        <li><Link to='/doctors'><i className="ri-nurse-line"></i>الأطباء</Link></li>
        <li><Link to='/receptionists'><i className="ri-door-open-line"></i>موظفي الإستقبال</Link></li>
        <li><Link to='/financial'><i className="ri-money-dollar-box-line"></i>الحسابات</Link></li>
        <li><Link to='/store'><i className="ri-store-line"></i>المخزن</Link></li>
        <li><Link to='/logout'><i className="ri-logout-box-r-line"></i>تسجيل الخروج</Link></li>
      </ul>
    </>
  )
}

export default SideNavbar