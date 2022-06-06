import Navigation from "../Navigation"
import Form from "../Form"
import Footer from "../Footer"
import styles from "../../styles/Services.module.css"
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
            <Footer />
        </div>
    )
}