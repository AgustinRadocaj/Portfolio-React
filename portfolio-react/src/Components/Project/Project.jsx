import React from 'react'
import styles from './Project.module.css'
import placeholder from '../../assets/placeholder.jpg'

export const Project = () => {
  return (
    <div className={styles.container}>
        <div className={styles.name}>
            <h3 className={styles.title}>Title</h3>
            <img className={styles.img} src={placeholder} alt="placeholder" />
        </div>
        <div className={styles.info}>
            <p className={styles.description}>
            A web application built with React and Node.js that allows users to manage tasks, 
            track progress, and collaborate with team members in real-time.
            </p>
            <div>Stack: React - Node</div>
            <div className={styles.links}>
                <a  className={styles.link} href="">Link proyecto</a>
                <a  className={styles.link} href="">Link Repo</a>
            </div>   
        </div>
    </div>
  )
}
