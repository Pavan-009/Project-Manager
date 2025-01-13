import React from 'react'
import Button from './Button'
function ProjectSidebar({onStartAddProjects}) {
  return (
    <aside className = "w-1/3 px-8 py-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2>Your Projects</h2>
        <div>
            <Button onClick = {onStartAddProjects}>+ Add Project</Button>
        </div>
    </aside>
  )
}

export default ProjectSidebar