import style from "../../../styles/Home/HomeVirtualPhotoEditing.module.css";
import Image from "next/image";
import HomeVirtualPhotoEditingCont from './HomeVirtualPhotoEditingCont';

function HomeVirtualPhotoEditing() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className="row">
          <div className={`col-md-6 ${style.image_area}`}>
            <div>
              <div>
                <div className="next-img-container">
                  <Image
                    src="/home/home-studio.png"
                    alt="Test"
                    layout="fill"
                    className="next-image"
                  />
                </div>
              </div>
              <div className="d-block d-md-none">
             <HomeVirtualPhotoEditingCont />
             </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={style.text_section}>
              <h2>We’re your virtual photo editing and design studio</h2>
              <h3>
                Image editing services for ecommerce businesses and pros, from
                product photographers to Amazon sellers to global brands.
              </h3>
             <div className="d-none d-md-block">
             <HomeVirtualPhotoEditingCont />
             </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeVirtualPhotoEditing;
