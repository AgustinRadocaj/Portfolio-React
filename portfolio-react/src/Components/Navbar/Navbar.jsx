import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navButton}>
            <div className={styles.navText}>Experiencia</div><img className={styles.navLogo} src="/vite.svg" alt="Experiencia"/>
        </div>
        <div className={styles.navButton}>
            <div className={styles.navText}>Proyectos</div><img className={styles.navLogo} src="/vite.svg" alt="Proyectos"/>
        </div>
        <div className={styles.navButton}>
            <div className={styles.navText}>Certificacion</div><img className={styles.navLogo} src="/vite.svg" alt="Certificacion"/>
        </div>
        <div className={styles.navButton}>
            <div className={styles.navText}>Contacto</div><img className={styles.navLogo} src="/vite.svg" alt="Contacto"/>
        </div>
    </div>
  )
}
