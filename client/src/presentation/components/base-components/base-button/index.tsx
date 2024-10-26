import styles from './BaseButton.module.css';

/**
 * @param text - The label displayed on the button.
 * @param type - Defines the button's action type.
 */
export interface IBaseButtonProps {
    text:string;
    type:"submit" | "reset" | "button" | undefined;
}

const BaseButton = ({text, type}: IBaseButtonProps) => {
    return <button className={styles.base_button_wrapper} type={type}>{text}</button>
}

export default BaseButton;