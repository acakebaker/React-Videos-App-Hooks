import '../css/SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
   const [term, setTerm] = useState('');

   // Function for when the form is submitted.
   const onSubmit = (event) => {
      event.preventDefault();
      onFormSubmit(term);
   };

   return (
      <form onSubmit={onSubmit} className='search-field'>
         <div>
            <input 
               className='input-field'
               type='text' 
               value={term} 
               onChange={(e) => setTerm(e.target.value)} 
               placeholder='Search for a YouTube video...'
            />
         </div>
      </form>
   );
}

export default SearchBar;