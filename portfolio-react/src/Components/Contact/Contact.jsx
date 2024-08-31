import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title} >Contacto</h1>
        <div className={styles.buttonContainer}>
            <button className={styles.button}>WhatsApp</button>
            <button className={styles.button}>Email</button>
            <button className={styles.button}>Linkedin</button>
            <button className={styles.button}>Github</button>
        </div>
    </div>
  )
}
