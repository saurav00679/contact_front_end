import React, { useState,useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Button from "./Button";
import ShowContact from "./ShowContact";
import ClearIcon from '@mui/icons-material/Clear';

const Contacts = ()=>{
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get('http://127.0.0.1:3000/contacts', { params: { searchKey: search } });
          setContacts(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      if(search!==''){
        fetchData();
      } else{
        setContacts([]);
      }

    }, [search]);
    

    const buttons = ['1','2','3','4', '5', '6', '7', '8', '9', '*', '0', '#']

    const handleClick = (event)=>{
      const newValue = search + event.target.value;
      setSearch(newValue);
    }

    const handleChange = (event)=>{
      const newValue = event.target.value;
      setSearch(newValue);
    }

    return (
    <>
      <Header />

      {
        contacts.length > 0 ? 
        <div className="contacts">
          {contacts.map((contact) =>
            <ShowContact key={contact.id} id={contact.id} contact={contact} />)}<hr/>
        </div> : <p className="no_contacts">No contacts to show.</p>
      }

      <div className="input-clear">
        <input className='in_show' value={search} placeholder="Enter Number to search" onChange={handleChange}></input>
        <button className="clear_btn" onClick={()=>setSearch('')}><ClearIcon/></button>
      </div>
      

      <div className='keypad'>
        {buttons.map((btn) => (
          <Button key={btn} value={btn} handleClick={handleClick} />
        ))}
      </div>
    </>)
}

export default Contacts;