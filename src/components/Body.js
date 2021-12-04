import React from 'react';
import './Body.css';
import AddIcon from '@mui/icons-material/Add';
import { Form } from 'react-bootstrap';
import { useState } from 'react';


const Body=(props)=>{
    const [expand,setexpand]=useState(false);
    const [note, setNote]=useState({
        title:"",
        content:""
    }
    );

    const expandit=()=>{
        setexpand(true);
    }

    const backnormal=()=>{
        setexpand(false);
    }

    const InputEvent=(event)=>{

        
        const {name,value}=event.target;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,

            };
        });
    };

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });
        
    };

    return(
        <>
        <div className='main-container' onDoubleClick={backnormal}  >
        <Form>
            {
                expand?
                <Form.Group className="mb-3" >
                    <Form.Control 
                    type="text" 
                    name="title"
                    placeholder="Title" 
                    className='inputs1' 
                    value={note.title} 
                    onChange={InputEvent} />
                </Form.Group>:null
            }
            <Form.Group className="mb-3" >
                <Form.Control 
                as="textarea" 
                rows="" 
                className='inputs2' 
                name="content"
                placeholder='Enter the Note...' 
                value={note.content} 
                onChange={InputEvent}
                onClick={expandit}
                />
                
            </Form.Group>
           {
                expand?
                <button onClick={addEvent}>
                    <AddIcon className='plus' />
                </button>
                :null
           }
        </Form>
        </div>
        </>
    );
}
export default Body;