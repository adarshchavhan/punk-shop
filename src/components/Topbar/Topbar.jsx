import React from 'react'
import './Topbar.css'

const Topbar = ({query, setQuery}) => {
  return (
    <div className="top__bar">
        <h1>Find Your Taste!</h1>
        <div className="search__bar">
          <input type="text" placeholder='Enter taste...' value={query} onChange={e => setQuery(e.target.value)} />
        </div>
    </div>
  )
}

export default Topbar