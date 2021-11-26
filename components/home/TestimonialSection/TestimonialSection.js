import style from "../../../styles/Home/Tastimonial.module.css";
import Link from "next/link";
import Image from "next/image";

function TestimonialSection() {
  return (
    <section className={style.section_main}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={`row w-100 mx-auto`}>
            <article className={`col-md-6 ${style.text_section}`}>
              <div className={style.tetimonial}>
                <div className={style.testimonial_text}>
                  <p className="px-3 px-md-0">
                    The amount of pictures we’re able to get back in such a
                    short amount of time is one of the things we absolutely love
                    about Path. We’re able to photograph all of our products and
                    submit for editing in the same evening.{" "}
                    <strong>
                      We wake up to the edited images the next day, and they’re
                      perfect.
                    </strong>
                    We have the freedom to shoot products on any surface with
                    any lighting because we know Path will come through and
                    deliver consistent, quality imagery every time.
                  </p>
                </div>
              </div>
              <div className={style.auhtor}>
                <h5>Alee Mills</h5>
                <p>Director of Operations, Ice Cream Castles</p>
              </div>
              <div className="d-block d-md-none text-center mt-3">
                <Link href="/">
                  <a className={`pt-0 ${style.read_more}`}>Read story</a>
                </Link>
              </div>
            </article>
            <article className={`col-md-6 px-5 ${style.image_section}`}>
              {/* <div className={`d-block d-md-none ${style.header}`}>
                <h5>Testimonials</h5>
              </div> */}
              <p className={`${style.title} d-none d-md-block`}>
                See how Ice Cream Castles reduced their{" "}
                <strong>
                  product photo turnaround from 1 week to 1 day with Path
                </strong>
              </p>
              <div className="d-none d-md-block">
                <Link href="/">
                  <a className={style.read_more}>Read story</a>
                </Link>
              </div>
              <div className={style.img_box}>
                <div>
                  <div className="next-img-container">
                    <Image
                      src="/home/pajamas.png"
                      alt="Image"
                      layout="fill"
                      className="next-image"
                    />
                  </div>
                </div>
                <div className={`d-block d-md-none ${style.header}`}>
                <h5>Testimonials</h5>
              </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
