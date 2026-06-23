import React,{useState,useEffect} from 'react';
import "../Css/Cards.css"

const Cards = ({key,name,url}) =>{
    const [state,setState] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setState(data))
    },[url])
    const [image,setImage] = useState(false)
    return (
        
        <>
        
        <div style = {{height:"30vh",width:"20%",backgroundColor:"rgb(255, 255, 255)",borderRadius:"1px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            {state && <img id = "pokemon-image"  onMouseEnter={()=>setImage(true)} onMouseLeave={()=>setImage(false)} src={image ? state.sprites?.other?.showdown?.front_default : state.sprites?.other?.dream_world?.front_default}  alt={name} style={{width:"100px",height:"100px",objectFit:"contain"}}/>}
            <h1 style={{fontSize:"26px",fontWeight:"bold",fontFamily:"revert-layer"}}>{name}</h1>
            <p style={{fontSize:"15px",fontFamily:"Arial, sans-serif"}}>weight: {state?.weight} kg</p>
        </div>
        </>
    )
}

export default Cards;