import Image from "next/image";
import style from "../../styles/Home/HowItWork.module.css";
import { CgArrowRight } from "react-icons/cg";

function Home_HowItWorks() {
  return (
    <section className={style.section_conatiner}>
      <article className="container">
        <div className="row">
          <div className={`${style.text_section} col-md-6`}>
            <h2 className="d-none d-md-block">How it works</h2>
            <div>
              <ol>
                <li>
                  <span className={`${style.fr_sriale} ${style.sriale}`}>1</span>{" "}
                  <span>
                    Request a quote for the images you need edited — we’ll get
                    back to you within 45 minutes
                  </span>
                </li>
                <li>
                  <span className={`${style.two_sriale} ${style.sriale}`}>2</span>{" "}
                  <span>
                  Approve your quote and give us the green light to get started
                  </span>
                </li>
                <li>
                  <span className={`${style.three_sriale} ${style.sriale}`}>1</span>{" "}
                  <span>
                  Upload your images, and then let us do the rest
                  </span>
                </li>
              </ol>
            </div>
            <div className="pb-4 "> 
                   <button className="main-btn d-block d-sm-inline-block ">
                   CHECK OUT OUR PROCESS <span ><CgArrowRight className="fs-24"/></span>
                   </button>
               </div>
          </div>
          <div className={`col-md-6 ${style.img_section}`}>
          <h2 className="d-block d-md-none text-center">How it works</h2>
            <div className={style.img}>
              <div className="next-img-container">
                <Image
                  className="next-image"
                  alt="Image"
                  src={"/home/section-how-it-works.svg"}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Home_HowItWorks;
