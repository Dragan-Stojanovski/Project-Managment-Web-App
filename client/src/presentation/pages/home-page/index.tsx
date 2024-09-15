import styles from "HomePage.module.css";
import HeroSection from "./sections/hero-section";
import SetMetaInfo from "../../../infra/utility/SetMetaInfo";

const HomePage = ():JSX.Element => {
    return (
    <>
        <SetMetaInfo title={"Home Page"} description={"Home page"} /> 
    <HeroSection />
    </>
    )
}

export default HomePage;