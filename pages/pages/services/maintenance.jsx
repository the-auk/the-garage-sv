import Navigation from "../Navigation"
import Form from "../Form"
import Footer from "../Footer"
import styles from "../../styles/Services.module.css"
export default function Repair(){
    return (
        <div>
            <Navigation />
            <div className={`${styles['classesHero']} ${styles['maintenance_hero']}`}>
                <div className={styles.classesHeroContent}>
                Whether your bike has been sitting or if you actively ride, <br />
                The Garage is here to help with any work your bike needs <br />
                to maintain a fun & safe ride.
                </div>
            </div>
            <Form heading="Fill out the form for all your bike maintenance needs." />
            <Footer />
        </div>
    )
}