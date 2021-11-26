import { useContext, useEffect } from "react";
import { MenuContext } from "./_app";
import HelpForm from "./../components/help/helpForm";
import Head from "next/head";

function Help() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  //hide menu when render new page
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="mt-80">
        <HelpForm />
      </main>
    </>
  );
}

export default Help;
