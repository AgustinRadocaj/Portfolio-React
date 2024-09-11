import React from 'react'
import styles from './Project.module.css'
import StayFyLogo from '../../assets/STAYFY.png'
import worldpediaLogo from '../../assets/worldpedia.png'

export const Project = ({projectId}) => {

  const projectsData = [
    {
      id: 1,
      title: "StayFy",
      img: StayFyLogo,
      description: 'Tienda online de libros con un diseño moderno y funcional. La aplicación permite a los usuarios explorar, filtrar y comprar productos mediante una pasarela de pagos segura.',
      features: "Carrito de compras persistente - Pasarela de pagos - Filtros por categoria y autor - Panel de administracion - Login con google - Modo dark",
      stack: "React - Tailwind - Node - PostgreSQL - Vercel - GoogleAuth - Mercado Pago",
      projectLink: "https://stayfy-mu.vercel.app/",
      repoLink: "https://github.com/AgustinRadocaj/StyfyBack"
    },
    {
      id: 2,
      title: "Worldpedia",
      img: worldpediaLogo,
      description: "Aplicacion web para acceder a informacion de paises de todo el mundo. La aplicación permite a los usuarios explorar, filtrar y obtener detalles de cada pais.",
      features: "Filtros por categoria y autor - Busqueda por nombre - Modo dark - Diseño responsive",
      stack: "Next.js - Tailwind - Vercel",
      projectLink: "https://worldpedia-next.vercel.app/",
      repoLink: "https://github.com/AgustinRadocaj/CountriesApp"
    },

  ];

  const project = projectsData.find((project) => project.id === projectId);
  
  return (
    <div className={styles.container}>
        <div className={styles.name}>
            <h3 className={styles.title}>{project.title}</h3>
            <img className={styles.img} src={project.img} alt="project-image" />
        </div>
        <div className={styles.info}>
            <p className={styles.description}>
                {project.description}
            </p>
            <div className={styles.features}>
            <span className={styles.span}>Caracteristicas destacadas: </span>{project.features}
            </div>
            <div className={styles.stack}><span className={styles.span}>Stack:</span> {project.stack}</div>
            <div className={styles.links}>
                <a className={styles.link} href={project.projectLink} target='_blank'>Link proyecto</a>
                <a className={styles.link} href={project.repoLink} target='_blank'>Link Repo</a>
            </div>   
        </div>
    </div>
  )
}
