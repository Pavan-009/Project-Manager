import ProjectSidebar from "./components/projectSidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import { useState } from "react";
function App() {

  const [projectState,setProjectState] = useState({
    selectedProjectId : undefined,
    projects : []
  })

  function handleStartAddProject(){
    setProjectState(pevState=>{
     
      return {
        ...pevState,
        projects : [...prevState,newProject]
        
      }
    });
  }

  function handleAddProject(projectsData){
    const newProject = {
      ...projectsData,id:Math.random()
    }
    setProjectState(prev=>{
      return {
        ...projectState.projects,newProject,
      }
    })
  }

  let content;

  if(projectState.selectedProjectId === null){
    
    content = <NewProject/>
  }
  else{
    content = <NoProjectsSelected onStartAddProjects = {handleStartAddProject}/>
  }

  return (
    <main className = "h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProjects = {handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
