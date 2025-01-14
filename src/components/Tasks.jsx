import React from 'react'
import NewTasks from './NewTasks'

function Tasks({tasks,onAdd,onDelete}) {
    console.log(tasks);
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTasks onAddTask = {onAdd}/>
       
        {tasks.length === 0 &&  <p className='text-stone-800 mb-4'>This project doesnot have any tasks yet.</p>}
        {<ul className='p-4 mt-8 rounded-md bg-stone-100'>
            {tasks.map(ele=>(<li className='flex justify-between my-4' key = {ele.id}>
                
                <span>{ele.task}</span>
                <button onClick={()=>onDelete(ele.id)} className='text-stone-700 hover:text-red-500'>clear</button>
                
                </li>))}
        </ul>}
    </section>
  )
}

export default Tasks