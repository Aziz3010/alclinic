import React from 'react';
import '../styles/footer.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h6>جميع الحقوق <CopyrightIcon /> محفوظة. <a href='/' className='company_name'>أحمد عبدالعزيز</a></h6>
      </div>
    </footer>
  )
}

export default Footer;