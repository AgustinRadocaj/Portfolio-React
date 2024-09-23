import React from 'react'
import styles from '../Experiencie/Experience.module.css'
import wowlogo from '../../assets/logoWow.png'
import { useTranslation } from 'react-i18next'

export const Experience = () => {

  const {t} = useTranslation()

  return (
    <>
    <h1 className={styles.title}>{t('experienciaTitle')}</h1>
    <div className={styles.container}>
        <div className={styles.info}>
            <h1>WOW Legal Experience</h1>
            <h3>{t('job')}</h3>
            <p>{t('jobDescription')}</p>
            <a  className={styles.link} target="_blank" href="https://www.linkedin.com/company/wow-legal-experience/">Linkedin</a>
        </div>
        <div className={styles.logo}>
            <img src={wowlogo} alt="wowlogo"/>
        </div>
    </div>
    </>
  )
}
