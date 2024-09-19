import './App.css'
import  {Navbar}  from './Components/Navbar/Navbar'
import {Info} from './Components/Info/Info'
import { Experience } from './Components/Experiencie/Experience'
import { Display } from './Components/Display/Display'
import { Contact } from './Components/Contact/Contact'

function App() {
 
  return (
    <>
      <Navbar/>
      <Info/>
      <div id='experience'><Experience/></div>
      <div id='display'><Display/></div>
      <div id='contact'><Contact/></div>     
    </>
  )
}

export default App
