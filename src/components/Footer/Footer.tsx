import styles from './Footer.module.css'
import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import linkedin from '../../assets/Linkedin.png'
export function Footer(): JSX.Element { 
    return ( 
        <footer className={styles.container}> 
            <div className={styles.icons}>
                <img src={fb} alt='facebook'/>
                <img src={insta} alt='instagram'/>
                <img src={linkedin} alt='linkedin'/>
            </div> 
           <div>
            <p>Copyright ©2030 All rights reserved </p>
           </div>
        </footer>
    )
}