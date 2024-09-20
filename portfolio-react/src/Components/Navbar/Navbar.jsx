import React from 'react'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { Switcher } from '../Switcher/Switcher'

export const Navbar = () => {

  const {t} = useTranslation()

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className={styles.navbar}>
        <div className={styles.navButton} onClick={() => handleScroll('experience')}>
            <div className={styles.navText}>{t('experiencia')}</div><FontAwesomeIcon className={styles.icons} icon={faBriefcase} />
        </div>
        <div className={styles.navButton} onClick={() => handleScroll('display')}>
            <div className={styles.navText}>{t('proyectos')}</div><FontAwesomeIcon className={styles.icons} icon={faCode} />
        </div>
        <div className={styles.navButton} onClick={() => handleScroll('contact')}>
            <div className={styles.navText}>{t('contacto')}</div><FontAwesomeIcon className={styles.icons} icon={faAddressCard} />
        </div>
        <Switcher t={t}/>
    </div>
  )
}
