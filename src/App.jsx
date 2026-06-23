import React,{useState,useEffect} from 'react';
import Cards from './Components/Cards.jsx'
import "./Css/App.css"





const App = () =>{
  const [pokemon,setPokemon] = useState([])
  const [count,setCount] = useState(0)
  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=8`)
    .then((res)=>res.json())
    .then((res)=>setPokemon(res.results))
  },[count])
  return(
    <>
    <button onClick={()=>setCount(count-10)} style={{position:"absolute",top:"5%",left:"5%",transform:"translateY(-50%)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"5px",padding:"10px",fontSize:"20px",fontWeight:"bold"}}>Prev</button>
    <button onClick={()=>setCount(count+10)} style={{position:"absolute",top:"5%",right:"5%",transform:"translateY(-50%)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"5px",padding:"10px",fontSize:"20px",fontWeight:"bold"}}>Next</button>
      
    <div id='homeMainDiv' style={{paddingTop:"10vh"}}>
      {
        pokemon.map((item,index)=>{
          return(
            <Cards key={index} name = {item.name} url = {item.url}/>
          )
        })
      }
      
    </div>
    </>
  )
}

export default App;