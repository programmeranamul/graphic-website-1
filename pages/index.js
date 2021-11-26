import { useContext } from "react";
import { MenuContext } from "./_app";
import Home_HowItWorks from "./../components/home/Home_HowItWorks";
import FiveStarReviews from "./../components/Common/FiveStarReviews/FiveStarReviews";
import TestimonialSection from "./../components/home/TestimonialSection/TestimonialSection";
import HomeSomeFetaures from "./../components/home/HomeSomeFetaures/HomeSomeFetaures";
import ServiceInHome from "./../components/home/SereviceInHome/ServiceInHome";
import DontHaveToDoEeverything from "./../components/home/DontHaveToDoEeverything/DontHaveToDoEeverything";
import HomeVirtualPhotoEditing from "./../components/home/HomeVirtualPhotoEditing/HomeVirtualPhotoEditing";
import WakeUp from "../components/home/WakeUp/WakeUp";

function Index() {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <>
    <WakeUp />
      <HomeVirtualPhotoEditing />
      <ServiceInHome />
      <HomeSomeFetaures />
      <FiveStarReviews />
      <Home_HowItWorks />
      <TestimonialSection />
      <DontHaveToDoEeverything />
    </>
  );
}

export default Index;
