import styles from './GetStartedHeroSection.module.css';

const GetStartedHeroSection =():JSX.Element => {
    return (
        <section>
            <div className={styles.get_started_hero_section__container}>
                <h1>Another 1,570 organizations
                signed up last week.</h1>
                <p>Two simple plans, each with a <span> 30-day free trial</span>. No credit card required.</p>
            </div>
    </section>
        )
}

export default GetStartedHeroSection;