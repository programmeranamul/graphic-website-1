import style from "../../../styles/HowItWorks/HowSteps.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

const datas = [
  {
    imgSrc: "/howItWork/how-step-1_1300x.png",
    count: 1,
    title: "Kick things off by requesting a quote.",
    text1:
      "Select your service, turnaround time, and image complexity. We’ll give you an estimate right away, and then you’ll get a customized quote within 45 minutes.",
    text2:
      "Our default turnaround time for image edits is 24 hours, but you can opt for faster turnaround if needed. Not in a rush? Choose a longer turnaround time and get a discount. ",
    btn: true,
  },
  {
    imgSrc: "/howItWork/how-step-2_1300x.png",
    count: 2,
    title: "Upload your images.",
    text1:
      "Upload your images using your web browser or FTP (everything is secure and encrypted). You can upload any of these file types:",
    lists: [
      "JPG (Preferred)",
      "PSD",
      "TIFF",
      "PNG",
      "NEF",
      "RAW",
      "CR2",
      "DNG",
      "PDF",
    ],
  },
  {
    imgSrc: "/howItWork/how-step-3_1300x.png",
    count: 3,
    title: "Make any adjustments and approve your quote.",
    text1:
      "Once you’ve got your quote, you can make any final adjustments to timing, number of images, file format, and you can add free straightening, cropping, or resizing to your order. When you’re all set, approve your quote and we’ll get to work.",
  },
  {
    imgSrc: "/howItWork/how-step-4_1300x.png",
    count: 4,
    title: "Get back to the fun stuff while we edit your images.",
    text1:
      "Once those tedious edits are off your plate, you can get back to the parts of your work you enjoy most. ",
    text2:
      "We’ll carefully edit your images by hand. Each image will then be double-checked for perfection before we send you the finished files. ",
  },
];

function HowSteps() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.wrapper}>
          {datas.map((data, index) => (
            <div key={index} className={style.steps}>
              <div className={style.step_img}>
                <div className="next-img-container">
                  <Image
                    src={data.imgSrc}
                    alt={data.title}
                    className="next-image"
                    layout="fill"
                  />
                </div>
              </div>
              <div className={style.step_content}>
                <h2>Step {data.count}</h2>
                <h4>{data.title}</h4>
                <p>
                  {data.text1}{" "}
                  {data.text2 && (
                    <>
                      <br /><br />
                      {data.text2} 
                    </>
                  )}
                </p>
                {data.btn && (
                  <div className={style.action}>
                    <Link href="/">
                      <a className="main-btn d-inline-block">
                        Get Started <CgArrowRight />
                      </a>
                    </Link>
                  </div>
                )}
                {data.lists && (
                  <ul className={style.list}>
                    {data.lists.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
          {/* <div className={style.steps}>
            <div className={style.step_img}>
              <div className="next-img-container">
                <Image
                  src="/howItWork/how-step-1_1300x.png"
                  alt="Test"
                  className="next-image"
                  layout="fill"
                />
              </div>
            </div>
            <div className={style.step_content}>
              <h2>Step 1</h2>
              <h4>Kick things off by requesting a quote.</h4>
              <p>
                Select your service, turnaround time, and image complexity.
                We’ll give you an estimate right away, and then you’ll get a
                customized quote within 45 minutes.  <br /> <br />
                Our default turnaround time for image edits is 24 hours, but you
                can opt for faster turnaround if needed. Not in a rush? Choose a
                longer turnaround time and get a discount.{" "}
              </p>
              <div className={style.action}>
                  <Link href="/">
                  <a className="main-btn d-inline-block">Get Started <CgArrowRight /></a>
                  </Link>
              </div>

            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HowSteps;
