import { Button } from '../Button/Button'
import styles from './MainPage.module.css'

export function MainPage(): JSX.Element { 
    return ( 
        <div>
            <h1 className={styles.title}>Olá, eu sou Guilherme Desenvolvedor Full-stack</h1>
            <p className={styles.paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button />
        </div>
    )
}