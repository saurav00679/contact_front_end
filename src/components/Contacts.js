import React, { useState,useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Button from "./Button";
import ShowContact from "./ShowContact";
import ClearIcon from '@mui/icons-material/Clear';

const Contacts = ()=>{
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectChar, setSelectChar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://172.20.10.5:3000/contacts', { params: { searchKey: search } });
        setContacts(result.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    search !== '' ? fetchData() : setContacts([]);
  }, [search]);
    

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  const handleClick = (char)=>{
    const newValue = search + char;
    setSearch(newValue);
  }

  const handleSelect = () => {
    setSelectChar((prevVal)=> !prevVal)
  }

  const handleChange = (event)=>{
    const newValue = event.target.value;
    setSearch(newValue);
  }

  const handleClear = () => {
    setSearch(search.slice(0, -1));
  }

  return (
  <>
    <Header />

    <div className="items">
      { contacts.length > 0 ? 
        <div className="contacts">
          {contacts.map((contact) =>
            <ShowContact key={contact.id} id={contact.id} contact={contact} />)}
        </div> : <p className="no-contacts">No contacts to show.</p>
      }

      <div className="input-clear">
        <button className="change-selector" onClick={handleSelect}>
          { selectChar ? '123' : 'abc' }
        </button>

         <input 
           className='in-show'
           value={search}
           placeholder="Enter to search..."
           onChange={handleChange}
         />

        <button className="clear-btn" onClick={handleClear}><ClearIcon/></button>
      </div>

      <div className='keypad'>
        {buttons.map((btn) => (
          <Button key={btn} value={btn} handleClick={handleClick} selectChar={selectChar}/>
        ))}
      </div>
    </div>
  </>)
}

export default Contacts;