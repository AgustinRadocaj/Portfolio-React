import React from 'react'
import { Card } from '../Card/Card'
import { Project } from '../Project/Project'
import styles from './Display.module.css'

export const Display = () => {
  return (
    <>
    <h1 className={styles.title}>Proyectos</h1>
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <Card name="StayFi" img="https://i.pravatar.cc/300" />
        <Card name="Worldpedia" img="https://i.pravatar.cc/320" />
      </div>
        <Project />
    </div>
    </>
  )
}
