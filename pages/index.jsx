import Head from 'next/head'
import Navigation from './Navigation'
import Hero from './Hero'
import Footer from './Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.fixedStripes}>
        <div className={styles.leftStripe}></div>
        <div className={styles.rightStripe}></div>
      </div>

      <div className={styles.uppercontent}>
      <Navigation />
      <Hero />

      <div className={styles.maxcontainer}>
        <div className={styles.mottowrap}>
            <div className={styles.headingjumbo_small}>
            We specialize in motorcycle customization & restoration. Whether you have a vintage bike you'd like to get cleaned up and running, or a newer motorcycle that you want to tweak to your specifications, we can help.
            </div>
        </div>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.contentsection}>
        <div className={styles.services_heading}>SERVICES OFFERED</div>
        <div className={styles.serviceswrap}>
          <div className={styles.servicesinnerwrap}>
          <a className={styles.servicecontent} href='../services/repair'>
          <h1 className={styles.articleHeading}>Repair &gt;</h1>
            <div className={`${styles.serviceimagewrap} ${styles.one}`}></div>
            </a>
          <a className={styles.servicecontent} href='../services/maintenance'>
          <h1 className={styles.articleHeading}>Maintenance &gt;</h1>
          <div className={`${styles.serviceimagewrap} ${styles.two}`}></div>
            </a>
          <a className={styles.servicecontent} href='../services/customization'>
          <h1 className={styles.articleHeading}>Customization &gt;</h1>
          <div className={`${styles.serviceimagewrap} ${styles.three}`}></div>
            </a>
          </div>
            <div className={styles.divider}></div>
        </div>
      </div>
      <Footer />
      <Head>
        <title>The Garage of Silicon Valley</title>
        <meta name="description" content="The Garage of Silicon Valley" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      </div>
    </div>
  )
}
