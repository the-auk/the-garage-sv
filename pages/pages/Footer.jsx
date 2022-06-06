import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footerleft}>
                <h1 className={styles.footerheading}>
                    THE GARAGE OF SILICON VALLEY
                </h1>
                <div className={styles.footertext}>
                    <u><a href="tel:6692427118">(669) 242-7118</a></u><br />
                    682 Auzerais Ave<br />
                    San Jose, CA 95126<br />
                    <u><a href="mailto:info@thegaragesv.com">info@thegaragesv.com</a></u>
                </div>
            </div>
            <div className={styles.footerright}>
            <h1 className={styles.footerheading}>
                    BUSINESS HOURS
            </h1>
            <div className={styles.footertext}>
                    Monday-Friday<br />
                    10am-6pm<br />
            </div>
            </div>
        </div>
    )
};