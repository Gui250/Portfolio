import styles from './Projetos.module.css';
import imgDashboard from '../../assets/Rectangle 30.png';
import imgMulher from '../../assets/Rectangle 32.png'
import logo from '../../assets/Rectangle 34.png'

export function Projetos(): JSX.Element {
    return (
        <div className={styles.container}>
            <h2>Projetos</h2>
            <div className={styles.flexContainer}>
                <img src={imgDashboard} alt="Imagem do projeto" />
                <div className={styles.textContainer}>
                    <h2>Designing Dashboards</h2>
                    <p>
                        Este projeto foi desenvolvido com foco em criar dashboards 
                        interativos e intuitivos. O design combina funcionalidade 
                        com estética moderna.
                    </p>
                </div>
            </div>
            <div className={styles.flexContainer}>
                <img src={imgMulher} alt="Imagem do projeto" />
                <div className={styles.textContainer}>
                    <h2>Vibrant Portraits of 2020</h2>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
            <div className={styles.flexContainer}>
                <img src={logo} alt="Imagem do projeto" />
                <div className={styles.textContainer}>
                    <h2>36 Days of Malayalam type</h2>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </div>
    );
}
