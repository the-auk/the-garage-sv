import styles from '../styles/Navigation.module.css'
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth<=600){
        setShowDropdown(false);
        setShowMenu(true);
      }
      else{
        setShowMenu(true);
        setShowDropdown(false);
      }
    }
    window.addEventListener('resize', handleResize);

  });

  const handleDropMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleLeave =() =>{
    setShowDropdown(false);
  }
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
          <a href='/'>
            <div className={styles.logo_link}>
            <img className={styles.logo_image} src="/garage_logo.png" alt="The Garage's Logo" />
            </div>
          </a>
          <div onClick={handleDropMenu} className={styles.menuButton}>
              <div className={styles.longLine}></div>
              <div className={styles.shortLine}></div>
            </div>
          <div className={styles.menu}>
          <div className={!showMenu? `${styles["navigation_items"]}`: `${styles["navigation_items"]} ${styles["nav_items_hidden"]}`}>
              <div className={styles.navitemwrap}  onClick={handleClick} onMouseLeave={handleLeave} onMouseEnter={handleClick}>
                    <button className={styles.navigation_item}>SERVICES</button>
                    {Dropdown}</div>
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