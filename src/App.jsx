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
        ...prev,projects: [...projectState.projects,newProject]
      }
    })
  }
  console.log(projectState);
  let content;

  if(projectState.selectedProjectId === null){
    
    content = <NewProject onAdd={handleAddProject}/>
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
