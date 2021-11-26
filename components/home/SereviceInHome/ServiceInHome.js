import style from "../../../styles/Home/ServiceInHome.module.css";
import { ServiceInHomeData } from "./ServiceInHomeData";
import Link from "next/link";
import Image from "next/image"
import { CgArrowRight } from "react-icons/cg";

function ServiceInHome() {
  return (
    <section className={style.section}>
      <div className="container">
        <div>
          <div className="row w-100 mx-auto">
            {ServiceInHomeData.map((data, index) => (
              <div key={index} className={` col-md-4 px-1 py-1`}>
                <Link href="/">
                <a className={`${data.defaultClass} ${style.service_card}`}>
                  <article className={style.single_service}>
                    <h3 className={style.title}>{data.text}</h3>
                    {/* <div className={style.service_image_area}> */}
                        <div className={style.service_image_area}>
                            <div className="next-img-container">
                                <Image src={data.imgSource} alt={data.text} layout="fill" className="next-image" />
                            </div>
                        </div>
                  </article>
                </a></Link>
              </div>
            ))}
          </div>
          <div className={`${style.action} text-center`}>
              <Link href="/">
              <a className="main-btn d-block d-sm-inline-block">SEE ALL OUR SERVICES <CgArrowRight className="fs-24"/></a>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceInHome;
