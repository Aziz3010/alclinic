import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  const pathNameURL = window.location.pathname;
  const tokenLocalStorage = JSON.parse(
    localStorage.getItem("userTokenLocalStorage")
  );
  const [loginComponent, setLoginComponent] = useState(false);
  const [registerComponent, setRegisterComponent] = useState(false);
  const [layoutComponent, setLayoutComponent] = useState(false);
  console.log(pathNameURL);

  useEffect(() => {
    if (pathNameURL === "/login") {
      setLoginComponent(true);
      setRegisterComponent(false);
    } else if (pathNameURL === "/register") {
      setRegisterComponent(true);
      setLoginComponent(false);
    } else if ( pathNameURL !== "/login" || pathNameURL !== "/register") {
      if (tokenLocalStorage) {
        setLayoutComponent(true);
        setLoginComponent(false);
        setRegisterComponent(false);
      } else {
        window.location.replace('/login');
      }
    }
    


  }, [setLoginComponent, setRegisterComponent, pathNameURL, tokenLocalStorage]);

  return (
    <>
      {loginComponent === true ? (
        <Login setRegisterComponent={setRegisterComponent} />
      ) : null}
      {registerComponent === true ? (
        <Register setLoginComponent={setLoginComponent} />
      ) : null}
      {layoutComponent === true ? <Layout /> : null}
    </>
  );
};

export default App;
