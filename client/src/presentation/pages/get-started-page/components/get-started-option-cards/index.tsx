import SetMetaInfo from "../../../../../infra/utility/SetMetaInfo";
import OptionCard from "./components/option-card";
import styles from './GetStartedOptionCards.module.css';

export interface IOptions  {
    title:string;
    description:string;
    features:string[];
    price:number;
}

const GetStartedOptionCards = ():JSX.Element => {
    
    const options:IOptions[] = [
        {title:"Magamento Started", 
            description:"Ideal for freelancers, startups and small teams.",
        features:['Every feature you need'," 500GB storage for files & documents", 'Month-to-month, pay as you go']
        ,price:299   
    },
        {title:"Magamento Pro", description:"Ideal for growing businesses, larger groups, and companies that want the best.",
            features:['Every feature you need'," 500GB storage for files & documents", 'Month-to-month, pay as you go']
        ,price:399
        },

    ]
    
    return (
    
    <div className={styles.option_cards__wrapper}>
    <SetMetaInfo title={"Pricing & Sign Up"} description={"Pricing and sign up page"} /> 
        {options.map((item) => (
            <OptionCard key={item.title} title={item.title} description={item.description} features={item.features} price={item.price}/>
        ))}
    </div>)
}

export default GetStartedOptionCards;