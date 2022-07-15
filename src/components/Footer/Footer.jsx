import React from 'react';
import st from './Footer.module.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h6>جميع الحقوق <CopyrightIcon /> محفوظة. <a href='/' className={st.company_name}>أحمد عبدالعزيز</a></h6>
      </div>
    </footer>
  )
}

export default Footer;