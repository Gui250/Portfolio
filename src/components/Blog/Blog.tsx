import styles from './Blog.module.css'


export function Blog(): JSX.Element { 
    return( 
        <div className={styles.container}>
            <h2>Blog</h2>
            <div className={styles.cardContainer}>
            <div className={styles.card}>
                <h2>Making a design system from scratch </h2>
                <div className={styles.description}>
                    <p>
                    12 Feb 2030
                    </p>
                    <p>
                        Design, Pattern
                    </p>
                </div>
                <div className={styles.text}> 
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <h2>Creating pixel perfect icons in Figma </h2>
                <div className={styles.description}>
                    <p>
                    12 Feb 2030
                    </p>
                    <p>
                       Figma, Icon Design
                    </p>
                </div>
                <div className={styles.text}> 
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}