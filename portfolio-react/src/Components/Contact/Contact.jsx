import React from 'react'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useTranslation } from 'react-i18next'


export const Contact = () => {

  const {t} = useTranslation()

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{t('contact')}</h1>
        <div className={styles.buttonContainer}>
            <a href="https://wa.me/+542995304467/" target="_blank" className={styles.link}><FontAwesomeIcon className={styles.icon}  icon={faWhatsapp}/></a>
            <a href="mailto:jaguscaj@gmail.com" target="_blank" className={styles.link}><FontAwesomeIcon className={styles.icon}  icon={faEnvelope} /></a>
            <a href="https://www.linkedin.com/in/agustin-radocaj/" target="_blank" className={styles.link}><FontAwesomeIcon className={styles.icon}  icon={faLinkedinIn} /></a>
            <a href="https://github.com/AgustinRadocaj" target="_blank" className={styles.link}><FontAwesomeIcon className={styles.icon}  icon={faGithub} /></a>
        </div>
    </div>
  )
}
