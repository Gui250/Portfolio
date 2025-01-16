import styles from './Header.module.css'

export function Header(): JSX.Element { 
    return ( 
        <ul className={styles.lista}>
            <li className={styles.item_lista}>Projetos</li>
            <li className={styles.item_lista}>Blog</li>
            <li className={styles.item_lista}>Contato</li>
        </ul>
    )
}

