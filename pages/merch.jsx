import Navigation from "./Navigation"
import Footer from "./Footer"
import styles from "../styles/Merch.module.css"

export default function Merch(){
    return(
        <div>
            <Navigation />
            <div className={styles.merchHero}>
                <div className={styles.merchHeroText}>
                    Coming Soon...
                </div>
                <div className={styles.merchHeroBg}></div>
            </div> 
            <div className={styles.merchSection2}>
                <div className={styles.paragraph}>
                We are working on some amazing shop merchandise.
                <br />
                <br />
                Follow us on instagram 
                <span className={styles.highlight}> <a target="_blank" href="https://www.instagram.com">@thegarageofsiliconvalley </a></span>
                for more merch and shop updates.
                </div>
            </div>
            <Footer />
        </div>
    )
}