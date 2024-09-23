import React from 'react'
import styles from './Card.module.css'
import { useTranslation } from 'react-i18next'

export const Card = ({name, img, onClick}) => {

  const {t} = useTranslation()  
  
  return (
    <div class={styles.card} onClick={onClick}>
      <div class={styles.details}>
        <p class={styles.title}>{name}</p>
        <img class={styles.img} src={img} alt="project-photo" />
      </div>
      <button class={styles.button}>{t('infoButton')}</button>
    </div>
  )
}
