import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Note.css';

const Note=(props)=>{
    const deletenote=()=>{
        props.deleteItem(props.id);
    };
    
    return(
        <>
        <div className='takenotes'>
            <h1>
                {props.title}
            </h1>
       
            <p>{props.content}</p>
            <button className='Deleteicon' onClick={deletenote} >
            <DeleteOutlineIcon  />
            </button>
        </div>
        </>
    );

}
export default Note;