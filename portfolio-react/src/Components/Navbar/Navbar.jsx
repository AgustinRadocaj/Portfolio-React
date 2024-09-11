import React from 'react'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className={styles.navbar}>
        <div className={styles.navButton} onClick={() => handleScroll('experience')}>
            <div className={styles.navText}>Experiencia</div><FontAwesomeIcon className={styles.icons} icon={faBriefcase} />
        </div>
        <div className={styles.navButton} onClick={() => handleScroll('display')}>
            <div className={styles.navText}>Proyectos</div><FontAwesomeIcon className={styles.icons} icon={faCode} />
        </div>
        <div className={styles.navButton} onClick={() => handleScroll('contact')}>
            <div className={styles.navText}>Contacto</div><FontAwesomeIcon className={styles.icons} icon={faAddressCard} />
        </div>
    </div>
  )
}
