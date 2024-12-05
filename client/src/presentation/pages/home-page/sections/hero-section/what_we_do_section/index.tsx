import styles from './WhatWeDoSection.module.css';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";

const WhatWeDoSection = (): JSX.Element => {
    const boxesContent = [
        {
            icon: <AiOutlineDollarCircle className={styles.icon} />,
            title: 'DONATION',
            content: 'Aenean aliquam egestas augue, eu venenatis massa maximus sed. Nam convallis vestibulum purus ac egestas....',
        },
        {
            icon: <FaRegHandshake className={styles.icon} />,
            title: 'VOLUNTEER',
            content: 'Aenean aliquam egestas augue, eu venenatis massa maximus sed. Nam convallis vestibulum purus ac egestas....',
        },
        {
            icon: <TbHeartHandshake className={styles.icon} />,
            title: 'FUNDRAISE',
            content: 'Aenean aliquam egestas augue, eu venenatis massa maximus sed. Nam convallis vestibulum purus ac egestas....',
        },
    ];

    return (
        <section className={styles.what_we_do__container}>
            <div className={styles.what_we_do__wrapper}>
                <h2>What We Do Section</h2>
                <p>
                    We are always looking out and timely help disadvantaged, see our latest campaign, and if can you
                    pledge a small part but its significance for us to help people.
                </p>
            </div>
            <div className={styles.our_job_wrapper}>
                {boxesContent.map((item, index) => (
                    <div key={index} className={styles.our_job_box}>
                        {item.icon}
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
    );
};

export default WhatWeDoSection;