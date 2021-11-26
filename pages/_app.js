import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./../components/menu/menubar";
import { createContext, useState, useEffect, useRef } from "react";
import SideMenu from "../components/menu/sideMenu";
import Footer from "../components/footer/footer";
import GetQuateBottomBtn from './../components/Common/GetQuateBottomBtn';

export const MenuContext = createContext();

function MyApp({ Component, pageProps }) {
  const [showMenu, setShowMenu] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    });
  });

 


  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      <div className="layout_container d-flex">
        <div ref={menuRef}>
          <SideMenu />
        </div>
        <div className={`${showMenu ? "slide_out_content " : ""} main-content`}>
          <Menubar />
          <main className="main_section">
          <Component {...pageProps} />
          </main>
          <Footer />
        </div>
  
      </div>
      <GetQuateBottomBtn />
    </MenuContext.Provider>
  );
}

export default MyApp;
