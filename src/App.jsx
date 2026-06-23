import React,{useState,useEffect} from 'react';
import Cards from './Components/Cards.jsx'
import "./Css/App.css"
import {FaArrowRight, FaArrowLeft}from 'react-icons/fa'





const App = () =>{
  const [search,setSearch] = useState("")
  const [allPokemon,setAllPokemon] = useState([])
  const [pokemon,setPokemon] = useState([])
  const [count,setCount] = useState(0)
  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`)
    .then((res)=>res.json())
    .then((res)=>setAllPokemon(res.results))
  },[])
  useEffect(()=>{

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=8`)
    .then((res)=>res.json())
    .then((res)=>setPokemon(res.results))
  },[count])

  useEffect(()=>{
    search.length === 0 ? fetch(`https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=8`)
    .then((res)=>res.json())
    .then((res)=>setPokemon(res.results)) 
    
    :

    
    setPokemon(allPokemon.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())))
},[search])
  
  return(
    <>
    <button onClick={()=>setCount(count-1)} style={{position:"absolute",top:"5%",left:"5%",transform:"translateY(-50%)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"5px",padding:"10px",fontSize:"20px",fontWeight:"bold"}}><FaArrowLeft/></button>
    <button onClick={()=>setCount(count+1)} style={{position:"absolute",top:"5%",right:"5%",transform:"translateY(-50%)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"5px",padding:"10px",fontSize:"20px",fontWeight:"bold"}}><FaArrowRight/></button>
    <div>
      <input type="text" placeholder='Search Pokemon' value = {search} onChange={(e)=>setSearch(e.target.value)} style={{position:"absolute",top:"5%",left:"50%",transform:"translateX(-50%)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"5px",padding:"10px",fontSize:"20px",fontWeight:"bold"}}/>
    </div>
     
    <div id='homeMainDiv' style={{paddingTop:"10vh"}}>
      <div id="cardsDiv">
        {
        pokemon.map((item,index)=>{
          return(
            <Cards key={index} name = {item.name} url = {item.url}/>
          )
        })
      }
      </div>
      
    </div>
    </>
  )
}

export default App;