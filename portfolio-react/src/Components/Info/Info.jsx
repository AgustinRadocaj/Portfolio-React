import React from 'react'
import styles from '../Info/Info.module.css'
import pic from '../../assets/Profile.jpg'
import cv from  '../../assets/AgustinRadocaj_DesarrolladorFullStack.pdf'
import { useTranslation } from 'react-i18next'

export const Info = () => {

    const {t} = useTranslation()

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <img src={pic} alt="profile"/>
            <h1>Agustin Radocaj</h1>
            <h3 className={styles.job}>Full Stack Developer</h3>
        </div>
        <div className={styles.info}>
            <h3 className={styles.infoTitle}>{t('infoTitle')}</h3>
            <p className={styles.text}>{t('infoText')}</p>
            <div>
                <h3 className={styles.infoTitle}>Stack</h3>
                <div>Front-End: ReactJs - Angular - NextJs</div>
                <div>Back-End: NodeJs - Firebase</div>
                <div>Database: PostgreSQL</div>
                <div>No code: Bubble.io</div>
                <div>{t('infoLanguage')}</div>
            </div>
            <a href={cv} target='_blank'><button className={styles.button}>{t('CV')}</button></a>
        </div>
    </div>
  )
}
