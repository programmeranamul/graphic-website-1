import style from "../../../styles/HowItWorks/HowMostPopular.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";

import "slick-carousel/slick/slick-theme.css";
import HowSlide from './HowSlide';


const howSliderOneData = [
  {
    title: "Clipping Path",
    imgSrc: "/home/product-1-red-shoe_255x192.png",
    text1:"Hand-drawn clipping paths give you crisp, clean cutouts that you can put on any background.",
    text2:"Put your images on any background color or setting",
    price:"1.24 NIS",
    defaultClass:"how_slide1_blue",
    destination:"/"
  },
  {
    title: "Background Removal",
    imgSrc: "/home/product-8_255x192.png",
    text1:"Make product photos pop with a clean white (or any other color you choose) background.",
    text2:"Put your images on any background color or setting",
    price:"1.24 NIS",
    defaultClass:"how_slide1_beguni",
    destination:"/"
  },
  {
    title: "Image Masking",
    imgSrc: "/home/product-9_255x192.png",
    text1:"For more intricate shots (like anything involving hair or fur), image masking gives you that extra level of precision, for cutouts that look completely natural.",
    text2:"Put your images on any background color or setting",
    price:"3.79 NIS",
    defaultClass:"how_slide1_yellow",
    destination:"/"
  },
  {
    title: "Shadow",
    imgSrc: "/home/product-10_255x192.png",
    text1:"Natural-looking shadows make products look more realistic — and generate more sales. Add depth and make your images more visually appealing.",
    text2:"Put your images on any background color or setting",
    price:"0.80 NIS",
    defaultClass:"how_slide1_red",
    destination:"/"
  },
  {
    title: "Ghost Mannequin",
    imgSrc: "/home/product-3_255x192.png",
    text1:"Remove mannequins or models to showcase the natural fit and drape of apparel, while still keeping the focus on your products. ",
    text2:"Put your images on any background color or setting",
    price:"2.83 NIS",
    defaultClass:"how_slide1_blue",
    destination:"/"
  },
  {
    title: "Color Change",
    imgSrc: "/home/product-11_255x192.png",
    text1:"Show true-to-life colors and minimize returns from customers who are disappointed their items don’t match the photo — without having to shoot every shade. ",
    text2:"Put your images on any background color or setting",
    price:"2.83 NIS",
    defaultClass:"how_slide1_beguni",
    destination:"/"
  },
  {
    title: "Photo Retouching",
    imgSrc: "/home/product-camera-yellow_255x192.png",
    text1:"Get the perfect shot, even after the fact. Correct flaws or imperfections, and make every element of your image shine. ",
    text2:"Put your images on any background color or setting",
    price:"2.20 NIS",
    defaultClass:"how_slide1_yellow",
    destination:"/"
  },
  {
    title: "Multi-clipping Path",
    imgSrc: "/home/product-bicycle-red_255x192.png",
    text1:"Select multiple areas within your image so they can be edited separately.",
    text2:"Put your images on any background color or setting",
    price:"3.79 NIS",
    defaultClass:"how_slide1_red",
    destination:"/"
  },
  {
    title: "Vector Conversion",
    imgSrc: "/home/service-vector-service-header_255x192.png",
    text1:"Convert images to vector files that can scale to any size without a loss of fine detail or quality.",
    text2:"Put your images on any background color or setting",
    price:"12.71 NIS",
    defaultClass:"how_slide1_blue",
    destination:"/"
  },
]
  

function HowMostPopular() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CgArrowLeft />,
    nextArrow: <CgArrowRight />,
  };
  return (
    <section className={style.section}>
      <article className="container">
        <h2 className={style.main_title}>
          Our <strong>most popular</strong> photo-editing services
        </h2>
        <div className={style.slider_main_wrapper}>
        <Slider {...settings} className="how_slider_1"> 
        {
          howSliderOneData.map((data, index) => <div key={index}>
          <HowSlide data={data} />
         </div>)
        }
        
        </Slider>
        </div>
      </article>
    </section>
  );
}

export default HowMostPopular;
