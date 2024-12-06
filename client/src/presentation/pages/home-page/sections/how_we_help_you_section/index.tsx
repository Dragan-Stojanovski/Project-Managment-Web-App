import BaseButton from '../../../../components/base-components/base-button';
import styles from './HowWeHelpYou.module.css';

const HowWeHelpYouSection = ():JSX.Element => {
    return (
        <section className={styles.how_we_help_you_section__container}>
        <div className={styles.how_we_help_you_section__wrapper}>
       
       
        <div className={styles.how_we_help_you_section__box}> 
            <h3>How <br></br>Can We Help You?</h3>
            <div className={styles.border_element}></div>
            <p>From career guidance to workforce solutions, we aim to bridge the gap between talent and opportunity.</p>
        <BaseButton text={'FIND MORE'} type={'button'} />
        </div>
       
       
        <div className={styles.how_we_help_you_section__second_box}>
        <h3>
                        Empowering Individuals and Businesses
                    </h3>
<ul>
    <li>Oman Labor Market Intelligence Analysis</li>
    <li>In-depth Career Guidance and Planning</li>
    <li>Workforce Demand Forecasting</li>
    <li>Connecting Talent with Opportunities</li>
    <li>Customized Employment Solutions</li>
</ul>
</div>
        </div>
        </section>
    )
}

export default HowWeHelpYouSection;