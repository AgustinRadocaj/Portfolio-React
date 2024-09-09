import React from 'react'
import styles from './Project.module.css'
import StayFyLogo from '../../assets/STAYFY.png'
import worldpediaLogo from '../../assets/worldpedia.png'

export const Project = ({projectId}) => {

  const projectsData = [
    {
      id: 1,
      title: "Task Manager",
      img: StayFyLogo,
      description: "A web application built with React and Node.js that allows users to manage tasks, track progress, and collaborate with team members in real-time.",
      stack: "React - Node",
      projectLink: "https://example.com/project1",
      repoLink: "https://github.com/example/project1"
    },
    {
      id: 2,
      title: "Worldpedia",
      img: worldpediaLogo,
      description: "A scalable e-commerce platform for managing products, processing payments, and tracking orders.",
      stack: "Next.js - Express",
      projectLink: "https://example.com/project2",
      repoLink: "https://github.com/example/project2"
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
            <div>Stack: {project.stack}</div>
            <div className={styles.links}>
                <a className={styles.link} href={project.projectLink}>Link proyecto</a>
                <a className={styles.link} href={project.repoLink}>Link Repo</a>
            </div>   
        </div>
    </div>
  )
}
