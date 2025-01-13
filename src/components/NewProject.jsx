import React from 'react'
import Input from './input';
import { useRef } from 'react';
function NewProject({onAdd}) {
    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();

   function handleSave(){
        const enteredTitle = title.current.value;
        const desc = title.current.value;
        const dueDate = title.current.value;

        //vadidation

        onAdd({
            title   : enteredTitle,
            description : desc,
            dueDate : dueDate
        })
    }


  return (
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={handleSave} className='px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950'>Save</button></li>
        </menu>
        <div>
        <Input ref = {title} label = "Title"/>
        <Input ref = {desc} label = "Description" textarea/> 
        <Input ref = {dueDate} label = "Due Date"/>
        </div>
    </div>
  )
}

export default NewProject