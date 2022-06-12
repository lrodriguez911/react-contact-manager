import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createRoot } from 'react-dom/client';

function AddPersonForm() {
  const [ person, setPerson ] = useState("");
    
   function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    e.preventDefault();
    contacts.push(e)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person.name} />
      <button type="submit" onClick={()=>{
        handleSubmit()
      }}>Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
const el = (
  <div>
    <AddPersonForm />
    <PeopleList data={contacts} />
  </div>
);
const container = document.getElementById('root');
const root = createRoot(container)
root.render(el);