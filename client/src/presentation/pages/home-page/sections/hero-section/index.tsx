import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = ():JSX.Element => {
    return (<section>
        <div className={styles.hero_section__container}>
<h1>Refreshingly simple project management.</h1>
<img src="./assets/images/characters-talking.svg" alt="characters talking"/>
<p>Magamento's the project management platform that<span> helps small teams move faster and make more progress than</span> they ever thought possible.</p>
<Link to="getstarted">Try it for free, enjoy work more</Link>
        </div>
    </section>)
}


export default HeroSection;