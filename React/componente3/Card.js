import styles from './Card.module.css'

export default function Card({description}){
    return (
        <div className={styles.cardpolaroid}>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='person'/>
            <div className={styles.cardcontainer}>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}