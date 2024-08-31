import React from 'react'
import styles from '../Info/Info.module.css'
import pic from '../../assets/Profile.jpg'

export const Info = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <img src={pic} alt="profile" />
            <h1>Agustin Radocaj</h1>
            <h3>Full Stack Developer</h3>
        </div>
        <div className={styles.info}>
            <p>
                Hola, soy Agustín Radocaj, un desarrollador FullStack apasionado por la tecnología y la innovación. 
                Me gradué de la academia Henry, donde adquirí sólidas habilidades en desarrollo de aplicaciones web. 
                Vivo en Mar del Plata, Argentina, y me dedico a seguir aprendiendo y creciendo en el ámbito del desarrollo de software.
            </p>
            <div>
                <h3 className={styles.stackTtitle}>Stack</h3>
                <div>Front-End: ReactJs - Angular - NextJs</div>
                <div>Back-End: NodeJs - Firebase</div>
                <div>Database: PostgreSQL</div>
                <div>No code: Bubble</div>
                <div>Ingles C2 Avanzado</div>
            </div>
            <button>Descargar CV</button>
        </div>
    </div>
  )
}
