import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SideNavbar from '../SideNavbar/SideNavbar';
import View from '../../Routes/Routers';
import st from './Layout.module.css';

const Layout = () => {
  const [showSideNav, setShowSideNav] = useState(true);

  return (
    <>
      <section className={showSideNav === true ? st.layout_sideNavbar : st.layout_sideNavbar_hide}>
        <SideNavbar showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      </section>

      <div className={ showSideNav === true ? `${st.left_side} left_side_media` : `${st.left_side_no_m} left_side_media`}>
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