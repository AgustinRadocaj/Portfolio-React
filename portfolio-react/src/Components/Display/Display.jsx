import React, {useState, useRef} from 'react'
import { Card } from '../Card/Card'
import { Project } from '../Project/Project'
import styles from './Display.module.css'

export const Display = () => {

  const [selectedProject, setSelectedProject] = useState(1)
  const projectRef = useRef(null)

  const handleProjectChange = (id) => {
    setSelectedProject(id)

    if(projectRef.current){
      projectRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <>
    <h1 className={styles.title} onClick={()=>{handleProjectChange(1)}}>Proyectos</h1>
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <Card name="StayFi" img="https://i.pravatar.cc/300" onClick={()=>{handleProjectChange(1)}}/>
        <Card name="Worldpedia" img="https://i.pravatar.cc/320" onClick={()=>handleProjectChange(2)}/>
      </div>
      <div ref={projectRef}>
        <Project projectId={selectedProject}/> 
      </div>     
    </div>
    </>
  )
}
