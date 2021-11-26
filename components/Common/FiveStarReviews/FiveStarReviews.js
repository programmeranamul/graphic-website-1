import style from "../../../styles/FiveStarReview/FiveStarReview.module.css";
import Image from "next/image";
import FullGreenStar from "./../../Icons/FullGreenStar";
import FullBgGreenWgiteStar from './../../Icons/FullBgGreenWgiteStar';
import HalfeBgGreenWhiteStar from './../../Icons/HalfeBgGreenWhiteStar';


function FiveStarReviews() {
  return (
    <section className={style.star_section}>
      <article className="container">
        <div className={style.section}>
        <div className={style.sec}>
          <div className={style.image_section}>
            <div className={style.img_container}>
              <div className="next-img-container">
                <Image
                  src="/FiveStarReview/star.svg"
                  alt=""
                  className="next-image"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={style.text_section}>
            <h2 className={style.title}>Over 4,189 5-star reviews</h2>
            <p className={style.des}>
              We{"'"}ve edited more than 8 million images for 26,506 businesses
              like yours
            </p>
            <div>
    <div className={style.test_IMG}>
      <div className="next-img-container">
        <Image src="/FiveStarReview/trustbox-fallback.png" alt="" className="next-image" layout="fill"/>
      </div>
    </div>

                {/* <p className={style.text}><FullGreenStar /> <span >P Anamul</span></p> 
                <div>
                  <FullBgGreenWgiteStar />
                  <FullBgGreenWgiteStar />
                  <FullBgGreenWgiteStar />
                  <FullBgGreenWgiteStar />
                  <HalfeBgGreenWhiteStar />
                  </div>           */}
            </div>
          </div>
        </div>
        </div>
      </article>
    </section>
  );
}

export default FiveStarReviews;
