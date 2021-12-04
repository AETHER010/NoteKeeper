import React from 'react';

import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  const [addnotes1,setaddnotes1]=useState([]);
  const passEvent=(note)=>{

    setaddnotes1((prevData)=>{
      return [...prevData,note];
    });

    console.log(note);


  };
  const onDelete=(id)=>{
    setaddnotes1((olddata)=>{
      olddata.filter((currdata,indx) =>{
        return indx !==id;
      });
    });
  };
  return (
    <div className="App">
      <Header/>
      <Body passNote={passEvent} />
      {/* <Note /> */}
      {addnotes1.map((val,index)=>{
        return <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete} />
      })
    }
      <Footer />
    </div>
  );
}

export default App;
