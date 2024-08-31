import React from 'react'
import styles from './Card.module.css'
import placeholder from '../../assets/placeholder.jpg'

export const Card = ({name, img}) => {
  return (
    <div className={styles.container}>
        <h1>{name}</h1>
        <img src={img} alt="project-logo" />
    </div>
  )
}
