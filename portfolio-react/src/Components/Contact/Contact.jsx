import React from 'react'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


export const Contact = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Contacto</h1>
        <div className={styles.buttonContainer}>
            <button className={styles.button}><FontAwesomeIcon className={styles.icon}  icon={faWhatsapp}/></button>
            <button className={styles.button}><FontAwesomeIcon className={styles.icon}  icon={faEnvelope} /></button>
            <button className={styles.button}><FontAwesomeIcon className={styles.icon}  icon={faLinkedinIn} /></button>
            <button className={styles.button}><FontAwesomeIcon className={styles.icon}  icon={faGithub} /></button>
        </div>
    </div>
  )
}
