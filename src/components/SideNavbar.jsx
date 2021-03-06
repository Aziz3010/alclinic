import React from 'react';
import { Link } from 'react-router-dom';
import alclinic from '../assets/imgs/logo.ico';
import LockIcon from '@mui/icons-material/Lock';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import StorageIcon from '@mui/icons-material/Storage';
import '../styles/sideNavbar.css';

const SideNavbar = ({ showSideNav, setShowSideNav }) => {
  const handleDropDown = (e) => {
    const clickedElement = e.target;
    const clickedElementName = clickedElement.nodeName;
    let arrow = undefined;

    if (clickedElementName === 'DIV') {
      const lastChild = clickedElement.lastChild;
      arrow = lastChild;
    } else if (clickedElementName === 'P') {
      const nextElement = clickedElement.nextElementSibling;
      arrow = nextElement;
    } else if (clickedElementName === 'svg') {
      const sameElement = clickedElement;
      arrow = sameElement;
    } else if (clickedElementName === 'path') {
      const parentElement = clickedElement.parentElement;
      arrow = parentElement;
    }

    const arrowParentElement = arrow.parentElement;
    const grandElement = arrowParentElement.parentElement;
    const nextGrandElementSibling = grandElement.nextElementSibling;
    nextGrandElementSibling.classList.toggle('d-block');

    // rotate the arrows
    const arrowStyle = getComputedStyle(arrow);
    if (arrowStyle.transform === 'matrix(1, 0, 0, 1, 0, 0)') {
      arrow.style.transform = "matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)";
      grandElement.style.borderBottom = "1px solid transparent";
    } else {
      arrow.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
      grandElement.style.borderBottom = "1px solid #fefefe80";
    }
  }

  return (
    <>
      <div onClick={() => setShowSideNav(!showSideNav)} className={`close_sideNav close_sideNav_media`}><CloseIcon /></div>
      <div className='sideNavbar_logo'>
        <img src={alclinic} alt="alclinic" />
      </div>

      <ul className='sideNavbar_ul'>

        {/* ???????????? ???????????????? */}
        {/* <li>
          <Link to='/home'>
            <HomeOutlinedIcon />
            <p>???????????? ????????????????</p>
          </Link>
        </li> */}

        {/* ?????????????? */}
        <li className='drop'>
          <BoyIcon />
          <div onClick={(e) => handleDropDown(e)} className='drop_text_arrow'>
            <p>????????????</p>
            <ChevronLeftIcon />
          </div>
        </li>
        <ul className='drop_down'>
          <li><Link to='/doctor/bookings'>???????????????? ??????????????</Link></li>
          {/* <li><Link to='/doctors'>??????????????</Link></li> */}
        </ul>

        {/* ?????????????????? */}
        <li className='drop'>
          <GirlIcon />
          <div onClick={(e) => handleDropDown(e)} className='drop_text_arrow'>
            <p>??????????????????</p>
            <ChevronLeftIcon />
          </div>
        </li>
        <ul className='drop_down'>
          <li><Link to='/receptionists'>??????????????????</Link></li>
          {/* <li><Link to='/receptionists/44'>????????????????</Link></li> */}
        </ul>

        {/* ???????????????? */}
        <li className='drop'>
          <CalendarMonthOutlinedIcon />
          <div onClick={(e) => handleDropDown(e)} className='drop_text_arrow'>
            <p>????????????????</p>
            <ChevronLeftIcon />
          </div>
        </li>
        <ul className='drop_down'>
          <li><Link to='/bookings/now'>???????????????? ??????????????</Link></li>
          <li><Link to='/bookings/past'>???????????????? ??????????????</Link></li>
          <li><Link to='/bookings/future'>???????????????? ??????????????</Link></li>
        </ul>

        {/* ???????????? */}
        <li>
          <Link to='/patients'>
            <AirlineSeatReclineExtraOutlinedIcon />
            <p>????????????</p>
          </Link>
        </li>

        {/* ???????????? */}
        {/* <li className='drop'>
          <StorageIcon />
          <div onClick={(e) => handleDropDown(e)} className='drop_text_arrow'>
            <p>????????????</p>
            <ChevronLeftIcon />
          </div>
        </li>
        <ul className='drop_down'>
          <li><Link to='/store'>?????????? ????????</Link></li>
          <li><Link to='/store'>????????</Link></li>
        </ul> */}

        {/* ?????????????? */}
        {/* <li className='drop'>
          <AttachMoneyIcon />
          <div onClick={(e) => handleDropDown(e)} className='drop_text_arrow'>
            <p>??????????????</p>
            <ChevronLeftIcon />
          </div>
        </li>
        <ul className='drop_down'>
          <li><Link to='/financial'>??????????????????</Link></li>
          <li><Link to='/financial'>??????????????????</Link></li>
          <li><Link to='/financial'>???????????????? ??????????????</Link></li>
        </ul> */}

        {/* ?????????? ???????????? */}
        <li>
          <Link to='/logout'>
            <LockIcon />
            <p>?????????? ????????????</p>
          </Link>
        </li>

      </ul>
    </>
  )
}

export default SideNavbar;