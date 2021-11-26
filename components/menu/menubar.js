import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { MenuContext } from "./../../pages/_app";
import style from "../../styles/Menu.module.css";
import { menuLinks } from "./../data/menuData";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFace } from "react-icons/md";

function Menubar() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [showOption, setShowOption] = useState(false);

  return (
    <header className="bg-white">
      <nav className="container">
        <div className={style.menubar}>
          <div className="d-flex align-items-center justify-content-between">
            {/* <Link href="/" passHref> */}
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            {/* </Link>       */}
            <span className="cursor-pointer d-block d-xl-none">
              <AiOutlineMenu
                className="fs-30 main-color"
                onClick={() => setShowMenu(!showMenu)}
              />
            </span>
            <div className="d-none d-xl-block">
              <div
                className={` ${style.side_menu_wrapper}   d-flex align-items-center`}
              >
                {menuLinks.map((menu, index) => (
                  <li key={index} className={`ps-3 position-relative`}>
                    <Link href={menu.path}>
                      <a>{menu.text}</a>
                    </Link>
                    {menu.option && (
                      <IoIosArrowDown
                        className={`${
                          showOption ? style.option_oppend : style.option.closed
                        } cursor-pointer ms-2  color-sky ${style.option_icon}`}
                        onClick={() => setShowOption(!showOption)}
                      />
                    )}
                    {menu.option && (
                      <ul
                        className={`${showOption ? "d-block" : "d-none"} ${
                          style.menu_bar_option
                        }`}
                      >
                        {menu?.option.map((op, index) => (
                          <li key={index}>
                            <Link href={op.path}>{op.text}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <div className="d-flex justify-content-between align-items-center ms-3">
                  <Link href="/admin/login">
                    <a className={`d-flex align-items-center ${style.login}`}>
                      <MdOutlineFace className="me-1 fs-17" />{" "}
                      <span> Login</span>
                    </a>
                  </Link>
                </div>
                <button className="main-btn ms-4">Get Quote</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Menubar;
