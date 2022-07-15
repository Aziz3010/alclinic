import React from 'react';
import st from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h6>جميع الحقوق <i className="ri-copyright-line"></i> محفوظة. <a href='/' className={st.company_name}>شركة عزيز</a></h6>
      </div>
    </footer>
  )
}

export default Footer;