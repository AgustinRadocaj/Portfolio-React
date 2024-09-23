import React, {useState, useRef} from 'react'
import { Card } from '../Card/Card'
import { Project } from '../Project/Project'
import styles from './Display.module.css'
import stayFyLogo from '../../assets/STAYFY.png'
import worldpediaLogo from '../../assets/worldpedia.png'
import { useTranslation } from 'react-i18next'

export const Display = () => {

  const {t} = useTranslation()
  
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
    <h1 className={styles.title}>{t('displayTitle')}</h1>
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <Card name="StayFy" img={stayFyLogo} onClick={()=>{handleProjectChange(1)}}/>
        <Card name="Worldpedia" img={worldpediaLogo} onClick={()=>handleProjectChange(2)}/>
      </div>
      <div ref={projectRef}>
        <Project projectId={selectedProject}/> 
      </div>     
    </div>
    </>
  )
}
