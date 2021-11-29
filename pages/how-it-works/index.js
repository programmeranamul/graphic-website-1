import HowSimpleWay from "../../components/HowItWorks/HowSimpleWay/HowSimpleWay";
import { useContext, useEffect } from "react";
import { MenuContext } from "../_app";
import HowSteps from './../../components/HowItWorks/HowSteps/HowSteps';
import PixelPerfectGuarantee from './../../components/HowItWorks/PixelPerfectGuarantee/PixelPerfectGuarantee';
import HowMostPopular from './../../components/HowItWorks/HowMostPopular/HowMostPopular';


function Index() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  //hide menu when render new page
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);

  return (
    <>
      <HowSimpleWay />
      <HowSteps />
      <PixelPerfectGuarantee />
      <HowMostPopular />
    </>
  );
}

export default Index;
