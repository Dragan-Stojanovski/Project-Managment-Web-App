import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";

const NavBar = (): JSX.Element => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isDropdownVisible, setIsDropdownVisible] = useState(isMobile ? false : true); 

  const navItems = [
    { label: "What's New?", path: '/news' },
    { label: "Features", path: '/features' },
    { label: "Sign In", path: '/signin' }
  ];

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

  return (
    <div className={styles.nav_bar__wrapper}>
     <div className={styles.mobile_logo_overview}>
      <div className={styles.main_header_logo__place}>
        <Link to="/"><span>M</span>anagemento</Link>
      </div>
{    isMobile  &&   <button onClick={() =>setIsDropdownVisible(!isDropdownVisible)}> {isDropdownVisible ? <IoClose /> : <IoMdMenu /> }</button>}
</div>
    {isDropdownVisible &&  <div>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
          <li className={styles.get_started}>
            <Link to="/getstarted">Pricing + Sign up</Link>
          </li>
        </ul>
      </div>}
    </div>
  );
};

export default NavBar;