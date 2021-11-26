import style from "../../../styles/Home/WakeUp.module.css";
import Link from "next/link"

function WakeUp() {
  return (
    <section className={style.section}>
      <div className="container">
        <article className={style.main}>
          <h1 className={style.title}>Wake up to perfectly edited product photos</h1>
          <p className={style.sub_title}>
            From a simple white background to the most complex clipping paths.
            <strong>Get pixel perfect image editing services</strong>, whenever you need them. 
          </p>
          <div className={style.action}>
<Link href="/">
    <a className="main-btn d-inline-block">Get Started</a>
</Link>
          </div>
          
        </article>
      </div>
    </section>
  );
}

export default WakeUp;
