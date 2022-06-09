import Navigation from "./Navigation"
import Form from "./Form"
import Footer from "./Footer"
import styles from "../styles/Classes.module.css"
import Head from 'next/head'

export default function Classes(){
    return (
        <div>
            <Navigation />
            {/* Starting here is Hero*/}
            <div className={styles.classesHero}>
                <div className={styles.classesHeroContent}>
                    The Garage: <br />Motorcycle Repair & Maintenance Classes
                </div>
            {/* Hero Ends Here*/}    
            </div>

            {/* Classes content starts here*/}
            <div className={styles.classesContentWrapper}>
                 {/* Classes Heading here*/}
                    <div className={styles.classesContentHeading}>
                        Classes Offered
                    </div>
                 {/* Heading ends here*/}

                 {/* Classes data under here (all data)*/}
                <div className={styles.classesMaxWidthWrap}>
                    {/* Individual class data under here */}
                    <div className={styles.classesContentActual}>
                        <div className={styles.classHeading}>Motorcycle 101</div>
                        <div className={`${styles.classPicture} ${styles.one}`}></div>
                    </div>
                    {/* Individual class data under here */}
                    <div className={styles.classesContentActual}>
                        <div className={styles.classHeading}>Fluids</div>
                        <div className={`${styles.classPicture} ${styles.two}`}></div>
                    </div>
                    {/* Individual class data under here */}
                    <div className={styles.classesContentActual}>
                        <div className={styles.classHeading}>Suspension</div>
                        <div className={`${styles.classPicture} ${styles.three}`}></div>
                    </div>
                    {/* Individual class data under here */}
                    <div className={styles.classesContentActual}>
                        <div className={styles.classHeading}>Chain & Sprockets</div>
                        <div className={`${styles.classPicture} ${styles.four}`}></div>
                    </div>
                </div>
            </div>
            {/* Classes data and Content both end here*/}
            <Form heading="Contact The Garage to know more about classes offered."/>
            <Head>
                <title>Classes | The Garage of Silicon Valley</title>
                <meta name="description" content="The Garage of Silicon Valley" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Footer />
        </div>
    )
}