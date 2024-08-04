import React, { useEffect, useState } from 'react'
import pic1 from './img/pic1.svg'

const Search = () => {

    const [filteredCountries, setFilteredCountries] = useState([]);
    const [query, setQuery] = useState('');

    const countrys = [
        { name: 'Mexico',
          img: {pic1}
         },
        { name: 'Spain' },
        { name: 'Franch' },
        { name: 'Australia' },
        { name: 'United Kingdom' },
        
    ]

    useEffect(() => {
        setFilteredCountries( countrys.filter((country) => {
            return country.name.toLowerCase().includes(query.toLowerCase())
        }))
    },[query])
  return (
    <div>
          <div>
             <input type="text" placeholder='Search for a Country' onChange={(e) => setQuery(e.target.value)} />
          </div>
       
         {
            filteredCountries.map((country, index) => (
              <li key={index}>{country.img}{country.name}</li>
            ))
          }
       
   



    </div>
  )
}

export default Search