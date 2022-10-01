// import third-party modules
import { useEffect } from "react";
// import local modules
import HomePage from "@/components/Home/page";
import { APP_NAME } from "@/utils/constants";

function Home() {
  useEffect(() => {
    document.title = `Home - ${APP_NAME}`;
  }, []);
  // return
  return <HomePage />;
}

export default Home;
