import React from 'react'
import styles from './Card.module.css'

export const Card = ({name, img}) => {
  return (
    <div class={styles.card}>
      <div class={styles.details}>
        <p class={styles.title}>{name}</p>
        <img class={styles.img} src={img} alt="project-photo" />
      </div>
      <button class={styles.button}>More info</button>
    </div>
  )
}
