import GetStartedHeroSection from './components/get-started-hero-section';
import GetStartedOptionCards from './components/get-started-option-cards';
import styles from './GetStartedPage.module.css';

const GetStarted = ():JSX.Element=> {
    return (
 <>
        <GetStartedHeroSection />
  <GetStartedOptionCards />
  </>
    )
}

export default GetStarted;