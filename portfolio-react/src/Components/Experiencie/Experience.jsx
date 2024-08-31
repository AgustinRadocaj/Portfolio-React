import React from 'react'
import styles from '../Experiencie/Experience.module.css'
import wowlogo from '../../assets/placeholder.jpg'

export const Experience = () => {
  return (
    <>
    <h1>Experiencia</h1>
    <div className={styles.container}>
        <div className={styles.info}>
            <h1>WOW Legal Experience</h1>
            <h3>Full Stack Developer</h3>
            <p>
                sdmnaskodbsandnbsapdnaspdnaspkdnkasdkasdnsañdkasdnkñamcsdñadasdasdasdasd
                asdasdasdasdasd
                sdmnaskodbsandnbsapdnaspdnaspkdnkasdkasdnsañdkasdnkñamcsdñadasdasdasdasdqqfqf
                fqfqf
            </p>
            <a href="">Linkedin</a>
        </div>
        <div className={styles.logo}>
            <img src={wowlogo} alt="wowlogo"/>
        </div>
    </div>
    </>
  )
}
