import React from 'react'
import Input from './input';
import { useRef } from 'react';
import Modal from './Modal';
function NewProject({onAdd,onCancel}) {
    const modaref = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

   function handleSave(){
        const enteredTitleValue = title.current.value;
        const descValue = description.current.value;
        const dueDatevalue = dueDate.current.value;

        //vadidation;

        if(enteredTitleValue.trim().length === 0 || descValue.trim().length === 0 || dueDatevalue.trim().length === 0){
            //show error
            modaref.current.open();
            return
        }

        onAdd({
            title   : enteredTitleValue,
            description : descValue,
            dueDate : dueDatevalue
        })
    }


  return (
    <>
    <Modal buttonCaption = "Okay" ref = {modaref}><h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Invalid Input</h2> <p className='mt-8'>Oops.... looks like you forgot to enter a value</p> <p>Please make sure you provide a valid value for every input field</p> </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button onClick = {onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={handleSave} className='px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950'>Save</button></li>
        </menu>
        <div>
        <Input ref = {title} label = "Title"/>
        <Input ref = {description} label = "Description" textarea/> 
        <Input type = 'date' ref = {dueDate} label = "Due Date"/>
        </div>
    </div>
    </>
  )
}

export default NewProject