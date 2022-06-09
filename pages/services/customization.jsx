import Navigation from "../Navigation"
import Form from "../Form"
import Footer from "../Footer"
import styles from "../../styles/Services.module.css"
import Head from 'next/head'

export default function Repair(){
    return (
        <div>
            <Navigation />
            <div className={`${styles['classesHero']} ${styles['customization_hero']}`}>
                <div className={styles.classesHeroContent}>
                If you are looking for something more customized to suit your style, <br />
                contact The Garage for options.
                </div>
            </div>
            <Form heading="Fill out the form for all your Customization needs." />
            <Head>
                <title>Customization | The Garage of Silicon Valley</title>
                <meta name="description" content="The Garage of Silicon Valley" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Footer />
        </div>
    )
}