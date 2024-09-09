import React from 'react'
import styles from './Card.module.css'

export const Card = ({name, img, onClick}) => {
  return (
    <div class={styles.card} onClick={onClick}>
      <div class={styles.details}>
        <p class={styles.title}>{name}</p>
        <img class={styles.img} src={img} alt="project-photo" />
      </div>
      <button class={styles.button}>Mas Info</button>
    </div>
  )
}
