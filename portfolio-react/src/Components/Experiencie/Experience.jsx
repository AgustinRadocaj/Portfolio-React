import React from 'react'
import styles from '../Experiencie/Experience.module.css'
import wowlogo from '../../assets/logoWow.png'

export const Experience = () => {
  return (
    <>
    <h1 className={styles.title}>Experiencia</h1>
    <div className={styles.container}>
        <div className={styles.info}>
            <h1>WOW Legal Experience</h1>
            <h3>Desarrollador Full Stack</h3>
            <p>
                Diseño y desarrollo de aplicaciones web para el sector legal en poryectos internos de la empresa y 
                clientes. Manejo de base de datos en PostgreSQL e integraciones de APIs de redes sociales de la empresa, 
                utilizando herramientas como React, Node y Bubble.io
            </p>
            <a  className={styles.link} target="_blank" href="https://www.linkedin.com/company/wow-legal-experience/">Linkedin</a>
        </div>
        <div className={styles.logo}>
            <img src={wowlogo} alt="wowlogo"/>
        </div>
    </div>
    </>
  )
}
