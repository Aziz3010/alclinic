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

      <div className={ showSideNav === true ? st.left_side : st.left_side_no_m}>
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