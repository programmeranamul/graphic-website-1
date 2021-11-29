import style from "../../../styles/HowItWorks/HowMostPopular.module.css";
import Image from "next/image";
import Link from "next/link";




function HowSlide({data}) {
  return (
    <div className={`${data.defaultClass} ${style.slider_section}`}>
      <div className="d-flex bg-white flex-md-row flex-column">
      {/* <div className="how_img_area"> */}
      
      <div className="how_img_area_S1">
      {/* <div className={style.how_img_area}> */}
        {/* <div className="next-img-container how_s1_img_con mx-auto"> */}
        <div className={`next-img-container ${style.how_s1_img_con} mx-auto`}>
          <Image
            src={data.imgSrc}
            alt={data.title}
            className="next-image"
            layout="fill"
          />
        </div>
      </div>

      <div className={style.text_area_w}>
        <h2 className={style.slider_title}>{data.title}</h2>
        <div className={style.text_area_d}>
          <p>
           {data.text1}
          </p>
          {
            data.text2 && <p>
            {data.text2}
           </p>
          }         
        </div>
        <div className={style.price}>
            <p>
              Starting at <strong>{data.price}</strong> per image
            </p>
          </div>
          <div className={style.action}>
      <Link href={data.destination}>
        <a className={style.view_btn}>View Details</a>
      </Link>
      <Link href="/">
        <a className={style.order_btn}>Order Now</a>
      </Link>
    </div>
        
      </div>
    </div>
    </div>
  
  );
}

export default HowSlide;
