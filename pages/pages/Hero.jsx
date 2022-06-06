import Image from 'next/image'
import styles from '../styles/Hero.module.css'

export default function Home() {
  return (
    <div className={styles.hero}>
    <div className={styles.intro_cc}>
      <div class={styles.heading_jumbo}>
          <span className={styles.svheading}>Welcome to The Garage<br /></span>
          Silicon Valley's Motorcycle Repair, Maintenance &amp; Customization shop.</div>
    </div>
    </div>
  )
}