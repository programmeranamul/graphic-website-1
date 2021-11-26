import style from "../../styles/FiveStarReview/FiveStarReview.module.css"

function FullGreenStar() {
  return (
    <svg
      role="img"
      aria-labelledby="trustpilotLogo"
      xmlns="http://www.w3.org/2000/svg"
      className={style.full_green}
      // style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;"
    >
      <path
        fill="#00B67A"
        d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"
      ></path>
      <path
        fill="#005128"
        d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"
      ></path>
    </svg>
  );
}

export default FullGreenStar;
