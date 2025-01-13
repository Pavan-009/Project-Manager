import ProjectSidebar from "./components/projectSidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import { useState } from "react";
import SelectedProject from "./components/selectedProject";
function App() {

  const [projectState,setProjectState] = useState({
    selectedProjectId : undefined,
    projects : []
  })

  function handleStartAddProject(){
    setProjectState(pevState=>{
     
      return {
        ...pevState,
        selectedProjectId : null,
        
      }
    });
  }

  function handleAddProject(projectsData){

    const newProject = {
      ...projectsData,id:Math.random()
    }
    setProjectState(prev=>{
      return {
        selectedProjectId : undefined,
        ...prev,projects: [...projectState.projects,newProject]
      }
    })
  }

  function handleCancel(){
    setProjectState(prev=>{
      return {
        ...prev,selectedProjectId : undefined
      }
    })
  }

  const selectedProject = projectState.projects.find(project=>project.id === projectState.selectedProjectId);
  let content = <SelectedProject onDelete = {handleDeleteProject} project = {selectedProject}/>

  if(projectState.selectedProjectId === null){
    
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectsSelected onStartAddProjects = {handleStartAddProject}/>
  }

  function handleSelectProject(projectId){
    setProjectState(prev=>{
      return {
        ...prev,selectedProjectId : projectId
      }
    })
  }

  function handleDeleteProject(){
    setProjectState(prev=>{
      return {
        ...prev,selectedProjectId : undefined,
        projects : prev.projects.filter(project=>project.id !== prev.selectedProjectId)
      }
    })
  }

  

  return (
    <main className = "h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectProject={handleSelectProject} onStartAddProjects = {handleStartAddProject} projects = {projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
