import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import Button from './Button'
Button
function NoProjectsSelected({onStartAddProjects}) {
  return (
    <div className='mt-24 text-center w-2/3'>

    <img src= {noProjectImage} alt = 'An empty task list' className='w-16 h-16 object-contain mx-auto'/>
    <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>No Projects Selected</h2>
    <p className='mt-8'>
    <Button onClick = {onStartAddProjects}>Create a Project</Button>
    </p>
    </div>
  )
}

export default NoProjectsSelected