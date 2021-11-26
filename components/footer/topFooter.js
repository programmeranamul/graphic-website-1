import Image from "next/image"
import { FaLinkedin, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import style from "./../../styles/Footer.module.css"
import Link from "next/link"


const soicalLinks = [
    {icon: <FaTwitter />, link:"https://web.facebook.com/profile.php?id=100044216173061"},
    {icon: <FaFacebook />, link:"https://web.facebook.com/profile.php?id=100044216173061"},
    {icon: <FaPinterest />, link:"https://web.facebook.com/profile.php?id=100044216173061"},
    {icon: <FaLinkedin />, link:"https://web.facebook.com/profile.php?id=100044216173061"},
]


const footerMenus = [
    {text: "Home", path: "/"},
    {text: "About", path: "/about"},
    {text: "Testimonials", path: "/testimonials"},
    {text: "Pricing", path: "/pricing"},
    {text: "Services", path: "/services"},
    {text: "Help", path: "/help"},
    {text: "Login", path: "/login"},
    {text: "Free Trial", path: "/free-trial"},
]

function TopFooter() {
    return ( 
       <div className={`${style.top_footer} bg-main`}>
            <div className="container d-flext align-items-center justify-content-center">
            <div className="text-center">
                <Image src="/logo1.svg" alt="Logo" height="60px" width="120px"/>
            </div>
            <div className={`${style.icon_wrapper} text-center`}>
{
    soicalLinks.map((link,index) => <a className={style.social_icon} href={link.link} traget="_blank" key={index}>{link.icon}</a>)
}
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column flex-md-row ">
                
                {
                    footerMenus.map((menu, index) => <li className={`mb-3 mb-md-0 ${style.footer_menu}`} key={index}><Link href={menu.path}><a>{menu.text}</a></Link></li>)
                }
            </div>
        </div>
       </div>
    )
}

export default TopFooter
