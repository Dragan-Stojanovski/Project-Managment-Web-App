import styles from "HomePage.module.css";
import HeroSection from "./sections/hero-section";
import SetMetaInfo from "../../../infra/utility/SetMetaInfo";
import WhatWeDoSection from "./sections/hero-section/what_we_do_section";

const HomePage = ():JSX.Element => {
    return (
    <>
        <SetMetaInfo title={"Home Page"} description={"Home page"} /> 
    <HeroSection />
    <WhatWeDoSection/>
    </>
    )
}

export default HomePage;