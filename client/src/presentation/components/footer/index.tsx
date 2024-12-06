import styles from "./Footer.module.css";
import { FaFacebook, FaHouse, FaInstagram, FaTiktok } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_box}>
          <img
            src="../../../../assets/images/oman_labor_market_intelligence_analysis_logo.png"
            alt="logo"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>

          <ul>
            <li>
              <FaHouse />
              Collins Street West,121 King Street, Usa.
            </li>
            <li>
              <BsFillTelephoneFill /> +0555 555 555
            </li>
            <li><MdEmail />info@example.com</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright_footer__wrapper}>
      <div className={styles.copyright_footer__box}>
      © 2024 Company - The Comapny Specialists All Rights Reserved
</div>
<div className={styles.copyright_footer__box}>
       <FaFacebook /> <FaInstagram /> <FaTiktok />
</div>
      </div>

    </footer>
  );
};

export default Footer;
