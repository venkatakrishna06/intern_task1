
import './App.css';
import {useState} from "react";
import Data from "./Data.json";
function App() {
    const[search,setSearch]=useState('');
  return (
<div>  <div className='search'>
    <form  className='searchBox'>
        <input type='text' className='searchBox'
               placeholder='Search for Movies' onChange={event => {setSearch(event.target.value)}}/>
        <button type='submit' className='searchBox' ><i className="fa fa-search"></i></button>
    </form>
</div>
    {Data.filter((val)=>{
        if (search==""){
            return val;
        }
        else if (val.title.toLowerCase().includes(search.toLowerCase()))
        {
            return val;
        }
    }).map((val,key)=>{
        return(
            <div className='col'>
        <div className="rounded mx-auto d-block " id='content'>

            <div className='img' key={key}><img src={val.src}/></div>

            <span className='title' key={key}>
                        {val.title}
                    </span>
        </div>
            </div>
        )
    })}
    </div>
  );
}
export default App;
