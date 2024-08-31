import React from 'react'
import { Card } from '../Card/Card'
import { Project } from '../Project/Project'
import styles from './Display.module.css'

export const Display = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <Card name="Cristian" img="https://i.pravatar.cc/300" />
        <Card name="Julia" img="https://i.pravatar.cc/320" />
      </div>
        <Project />
    </div>
  )
}
