import React from 'react'
import styles from '../Info/Info.module.css'
import pic from '../../assets/Profile.jpg'
import cv from '../../assets/CV_AgustinRadocaj_FullStackDeveloper.pdf'

export const Info = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <img src={pic} alt="profile"/>
            <h1>Agustin Radocaj</h1>
            <h3 className={styles.job}>Full Stack Developer</h3>
        </div>
        <div className={styles.info}>
            <h3 className={styles.infoTitle}>Sobre mi</h3>
            <p className={styles.text}>
                ¡Hola! Soy Agustín Radocaj, un desarrollador Fullstack apasionado por la tecnología y la innovación. 
                Mi objetivo es crear aplicaciones eficientes y fáciles de usar, priorizando siempre una experiencia de usuario intuitiva
                y fluida. Me encanta aprender constantemente para mejorar como programador y siempre estoy buscando nuevos retos para crecer tanto personal como profesionalmente.
            </p>
            <div>
                <h3 className={styles.infoTitle}>Stack</h3>
                <div>Front-End: ReactJs - Angular - NextJs</div>
                <div>Back-End: NodeJs - Firebase</div>
                <div>Database: PostgreSQL</div>
                <div>No code: Bubble.io</div>
                <div>Ingles C2 Avanzado</div>
            </div>
            <a href={cv} target='_blank'><button className={styles.button}>Descargar CV</button></a>
        </div>
    </div>
  )
}
