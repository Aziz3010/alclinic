import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(()=>{
    localStorage.removeItem("userTokenLocalStorage");
    window.location.replace('/login');
  })

  return (
    <div>جاري تسجيل الخروج</div>
  )
}

export default Logout