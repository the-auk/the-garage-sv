import styles from '../styles/Navigation.module.css'
import {useState} from 'react';

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleClick = () =>{
    setShowDropdown(!showDropdown);
  }
  const Dropdown = (<div className={showDropdown? `${styles["services_dropdown"]}`: `${styles["hidden_dropdown"]}`}> 
                      <a className = {`${styles["navigation_item"]} ${styles["dropdown_item"]}`} href="../services/repair">REPAIR</a>
                      <a className={`${styles["navigation_item"]} ${styles["dropdown_item"]}`} href="../services/maintenance">MAINTENANCE</a>
                      <a className={`${styles["navigation_item"]} ${styles["dropdown_item"]}`} href="../services/customization">CUSTOMIZATION</a>
                      </div>);
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation_wrap}>
          <a href='/'><div className={styles.logo_link}>
          <img className={styles.logo_image} src="/garage_logo.png" alt="The Garage's Logo" />
          </div>
          </a>
          <div className={styles.menu}>
          <div className={styles.navigation_items}>
              <div className={styles.navitemwrap} onMouseLeave={handleClick} onMouseEnter={handleClick}>
              {Dropdown}
                    <button className={styles.navigation_item}>SERVICES</button></div>
                    <a href="/classes" className={styles.navigation_item}>Classes</a> 
                    <a href="/gallery" className={styles.navigation_item}>GALLERY</a>
                    <a href="/merch" className={styles.navigation_item}>MERCH</a>
                    <a href="/contact" className={styles.navigation_item}>CONTACT US</a>
                </div>
          </div>
      </div>
    </div>
  )
}