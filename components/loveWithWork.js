import Image from "next/image"
import { CgArrowRight } from "react-icons/cg";
function LoveWithWork() {
    return (
        <div className="bg-deep-gray py-5">
           <div className="container">
               <div className="text-center pt-3">
               <Image src="/heart.svg" alt="Wark With Love" width="150px" height="150px"/>
               </div>
               <h2 className="title-3 text-center mb-5">Find the time to fall in love with your work again</h2>
               <div className="text-center pb-4 "> 
                   <button className="main-btn ">
                   Get Started <span ><CgArrowRight className="fs-24"/></span>
                   </button>
               </div>
               </div> 
        </div>
    )
}

export default LoveWithWork
