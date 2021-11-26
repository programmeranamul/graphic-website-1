import Link from "next/link"
import style from "../../styles/Footer.module.css"

/**
 * This component for Bottom Footer
 * It contains Copyright text and two links
 */

function BottomFooter() {
    return (
        <div className={style.bottom_footer}>
            <div className="container">
            <div className={`mb-4 ${style.terms_text}`}>
                <Link href="/terms-condition">
                <a className={`mx-3 ${style.frist_link}`}>terms & conditions</a></Link>
                <Link href="/terms-condition">
                <a className="mx-3">privacy policy</a></Link>
            </div>
            <p className="text-center"> © 2021 All rights reserved.      </p>
            </div>
        </div>
    )
}

export default BottomFooter
