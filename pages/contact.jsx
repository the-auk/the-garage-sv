import Navigation from './Navigation'
import Form from './Form'
import Footer from './Footer'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'

export default function Contact(){
    return(
        <div className={styles.contactWrapper}>
        <Navigation />
        <Form heading="Contact The Garage" />
        <Head>
            <title>Contact Us | The Garage of Silicon Valley</title>
            <meta name="description" content="The Garage of Silicon Valley" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Footer />
        </div>
    )
}