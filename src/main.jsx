import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/projects'
import Contact from './components/Contact'
import Layout from './components/Layout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
       <Route path="/" element= {<Layout/>}>
       <Route path='' element={<Hero/>}/> 
       <Route path='aboutme'   element={<About/>}/>
       <Route path='project' element={<Projects/>}/>
       <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
