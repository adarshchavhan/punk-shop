import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Topbar from './components/Topbar/Topbar';
import Card from './components/Card/Card';

const App = () => {
  const [bears, setBears] = useState([]);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    const res = await axios.get(`https://api.punkapi.com/v2/beers?${query && `beer_name=${query}`}`);
    if(res.data){
      setBears([...res.data]);
    }
  }

  useEffect(()=>{
      setTimeout(()=>{
        fetchData();
      },[800])
  },[query]);

  return (
    <div className="app">
        <Topbar {...{query, setQuery}}/>

        <div className="bears">
          {bears.length > 0 ? bears.map(bear => <Card key={bear.id} bear={bear}/>) 
            : <p className='error__msg'>No bear found.</p>}
        </div>

        <footer>Developed by <a href="https://adarshchavhan.netlify.com/">Adarsh</a>.</footer>
    </div>
  )
}

export default App