
import './App.css';
import Home from './HomeComponent/Home';
import Header from './HeaderComponent/Header';
import About from './AboutComponent/About'
import Project from './ProjectComponent/Project'
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './ProjectComponent/ProjectDetail';


function App() {
  return (
<>
  <Header/>

  <Routes>

<Route exact path="/" element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Project' element={<Project/>}/>
<Route path='/ProjectDetail/:id' element={<ProjectDetail/>}/>



  </Routes>
</>
  );
}

export default App;
