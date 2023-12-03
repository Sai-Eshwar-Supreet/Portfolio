import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/index';
import Home from './components/home/index';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Project1 from './components/Projects/ProjectContent/project1';
import Project2 from './components/Projects/ProjectContent/project2';
import Project3 from './components/Projects/ProjectContent/project3';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Portfolio' element={<Layout/>} >
          <Route index path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='resume' element={<Resume/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='projects/quirky-of-diceville' element={<Project1 />}/>
          <Route path='projects/aruval-slasher' element={<Project2 />}/>
          <Route path='projects/robo-run-roo' element={< Project3 />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
