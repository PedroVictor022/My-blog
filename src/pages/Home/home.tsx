import React, { memo } from "react"
import Footer from "../../components/Footer";
import { Header } from "../../components/header";
import HomeDisplay from "../../components/HomeDisplay";
import { handleDocument } from "../../helpers/prismic/home";

const Home = () => {
   const homeData = handleDocument();

   return (
      <React.Fragment>
         <Header />
         <HomeDisplay 
            title={homeData?.title} 
            description={homeData?.description}
         />
         <Footer />
      </React.Fragment>
   )
}
export default memo(Home);