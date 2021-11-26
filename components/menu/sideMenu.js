import style from "../../styles/Menu.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { MdOutlineFace } from "react-icons/md";
import { MenuContext } from "./../../pages/_app";
import { menuLinks } from "./../data/menuData";

function SideMenu() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [showOption, setShowOption] = useState(false);
  return (
    <div
      className={`${showMenu ? "" : style.side_menu_z_index_neg} ${
        style.side_menu
      } bg-main text-white`}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/admin/login">
            <a className={`d-flex align-items-center ${style.login}`}>
              <MdOutlineFace className="me-2 fs-17" /> <span> Login</span>
            </a>
          </Link>
          <span className="cursor-pointer" onClick={() => setShowMenu(false)}>
            <IoMdClose />
          </span>
        </div>
        <div className={style.side_menu_wrapper}>
          {menuLinks.map((menu, index) => (
            <li key={index}>
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
              <ul
                className={`${showOption ? "d-block" : "d-none"} ${
                  style.option
                }`}
              >
                {menu.option &&
                  menu?.option.map((op, index) => (
                    <li key={index}>
                      <Link href={op.path}>{op.text}</Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
