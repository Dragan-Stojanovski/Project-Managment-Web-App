import { Link } from 'react-router-dom';
import { IOptions } from '../..';
import styles from './OptionCard.module.css';


const OptionCard = ({title, description, features, price}: IOptions):JSX.Element => {
    return (
        <div className={styles.option_card__wrapper}>
<h3>{title}</h3>
<p>{description}</p>
<ul>
    {features.map((item) => (
        <li key={item}>{item}</li>
    ))}
</ul>
<p>${price}/user per month</p>
<div><b>We only bill you for employees.</b><br></br>
Invite guests for free.
</div>
<br></br>
<Link to={`/signup?package=${title}`}>Try it for free</Link>
</div>
    )
}

export default OptionCard;