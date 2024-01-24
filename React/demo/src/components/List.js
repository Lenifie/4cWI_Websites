import styles from './List.module.css'

export default function List({description}){
    return (
        <div className='List'>
            <ul className={styles.List}>
                <li>{description}</li>
            </ul>
        </div>
    )
}