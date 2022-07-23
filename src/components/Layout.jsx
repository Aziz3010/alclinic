import React, { useEffect, useState } from 'react';
import View from '../Routes/Routers';
import '../styles/layout.css';
import Footer from './Footer';
import Navbar from './Navbar';
import SideNavbar from './SideNavbar';

const Layout = () => {
  const [showSideNav, setShowSideNav] = useState(true);

  useEffect(()=>{
    if(window.innerWidth <= 666) {
      setShowSideNav(false); 
    };
  },[])

  return (
    <>
      <section className={showSideNav === true ? 'layout_sideNavbar' : 'layout_sideNavbar_hide'}>
        <SideNavbar showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      </section>

      <div className={ showSideNav === true ? `left_side left_side_media` : `left_side_no_m left_side_media`}>
        <Navbar showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        <main>
          <div className="container">
            <View />
          </div>
        </main>
        <Footer />
      </div>

    </>
  )
}

export default Layout;