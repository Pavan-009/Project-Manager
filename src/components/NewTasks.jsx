import { useState } from 'react';

function NewTasks({onAddTask}) {
    const [enteredTask,setEnteredTask] = useState("");
    function handleChange(e){
        setEnteredTask(e.target.value)
    }

    function handleClick(){
        //forward entered value to parent component
        onAddTask(enteredTask);

        //resetting the input element to empty string
        setEnteredTask('');

    }

    // function handleDelete(id){
    //     onDeleteTask(id);
    // }
  return (
    <div className='flex gap-4 items-center'>
        <input value = {enteredTask} onChange={handleChange} type='text' placeholder='Add a task' className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        <button onClick={handleClick} className='text-stone-700 hover:text-stone-950'>Add Task</button>
    </div>
  )
}

export default NewTasks