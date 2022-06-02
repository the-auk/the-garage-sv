import Navigation from "../Navigation"
import Form from "../Form"
import Footer from "../Footer"
import styles from "../../styles/Services.module.css"
export default function Repair(){
    return (
        <div>
            <Navigation />
            <div className={`${styles['classesHero']} ${styles['repair_hero']}`}>
                <div className={styles.classesHeroContent}>
                If your bike has an issue or needs replacement parts, <br />
                 The Garage can take care of it. Bring it by or make an appointment today.
                </div>
            </div>
            <Form heading="Contact The Garage to get your bike repair started today." />
            <Footer />
        </div>
    )
}