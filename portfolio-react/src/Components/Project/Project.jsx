import React from 'react'
import styles from './Project.module.css'
import StayFyLogo from '../../assets/STAYFY.png'
import worldpediaLogo from '../../assets/worldpedia.png'
import { useTranslation } from 'react-i18next'

export const Project = ({projectId}) => {

  const {t} = useTranslation()

  const projectsData = [
    {
      id: 1,
      title: "StayFy",
      img: StayFyLogo,
      description: t("description1"),
      features: t("features1"),
      stack: "React - Tailwind - Node - PostgreSQL - Vercel - GoogleAuth - Mercado Pago",
      projectLink: "https://stayfy-mu.vercel.app/",
      repoLink: "https://github.com/AgustinRadocaj/StyfyBack"
    },
    {
      id: 2,
      title: "Worldpedia",
      img: worldpediaLogo,
      description: t("description2"),
      features: t("features2"),
      stack: "Next.js - Tailwind - Cypress - Vercel",
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
            <span className={styles.span}>{t('features')}: </span>{project.features}
            </div>
            <div className={styles.stack}><span className={styles.span}>Stack:</span> {project.stack}</div>
            <div className={styles.links}>
                <a className={styles.link} href={project.projectLink} target='_blank'>{t('projectLink')}</a>
                <a className={styles.link} href={project.repoLink} target='_blank'>Link Repo</a>
            </div>   
        </div>
    </div>
  )
}
