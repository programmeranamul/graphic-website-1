import HowSimpleWay from "../../components/HowItWorks/HowSimpleWay/HowSimpleWay";
import { useContext, useEffect } from "react";
import { MenuContext } from "../_app";
import HowSteps from './../../components/HowItWorks/HowSteps/HowSteps';


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
    </>
  );
}

export default Index;
