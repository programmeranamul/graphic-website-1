import style from "../../../styles/Home/DontHaveToDoEeverything.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

//photographer.svg
//retailer.svg
//freelancer.svg

const datas = [
  {
    strongText: "A busy professional photographer",
    text: " with batches of edits due from a recent product photoshoot",
    imgSrc: "/home/photographer.svg",
  },
  {
    strongText: "An ecommerce retailer",
    text: "  who wants to use their time to move the needle instead of fiddling around in Photoshop",
    imgSrc: "/home/retailer.svg",
  },
  {
    strongText: "A freelancer or agency",
    text: " with tight client deadlines and tons of other deliverables to wrangle",
    imgSrc: "/home/freelancer.svg",
  },
];

function DontHaveToDoEeverything() {
  return (
    <section className={style.section}>
      <article className="container">
        <h2 className={`px-5 text-center ${style.title}`}>
          You don’t have to do everything yourself
        </h2>
        <h4 className={` ${style.sub_title}`}>
          Outsourced image editing services are ideal if you are...
        </h4>
      </article>
      <article className={`container ${style.main}`}>
        <div className="row w-100 mx-auto">
          {datas.map((data, index) => (
            <div key={index} className="col-md-4 mb-2">
              <div>
                <div className={style.img_container}>
                  <div className="next-img-container">
                    <Image
                      src={data.imgSrc}
                      alt={data.strongText}
                      layout="fill"
                      className="next-image"
                    />
                  </div>
                </div>
                <div className={style.content}>
                  <p>
                    <strong>{data.strongText}</strong> {data.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
      <div className="container text-center">
        <div className={style.action}>
          <Link href="/">
            <a className="main-btn">
              Get Started <CgArrowRight className="fs-24" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DontHaveToDoEeverything;
