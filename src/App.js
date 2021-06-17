import './App.css';
import {useState} from "react";
import Data from "./Data.json";
function App() {
    const[search,setSearch]=useState('');
    const [data, setData] = useState(Data);
    let backupMovies = [...Data];

    const updateMovies =() =>{
 if(!search)setData(backupMovies);

 if(search){
  setData(backupMovies.filter( e => e.title.toLowerCase().indexOf(search.toLowerCase()) >= 0));
 }

    }
  return (
<div>  <div className='search'>
        <input type='text' className='searchBox'
               placeholder='Search for Movies' onKeyPress={(event) => {
            var key = event.keyCode || event.which;
            if (key === 13) {
                updateMovies()
            }
        }} onChange={event => setSearch(event.target.value)}/>
        <button className='searchBox' onClick={updateMovies}><i className="fa fa-search"></i></button>
</div>
    {data.map((val,key)=>{
        return(
            <div className='col' key={key}>
        <div className="rounded mx-auto d-block " id='content'>

            <div className='img'><img src={val.src}/></div>

            <span className='title'>
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
