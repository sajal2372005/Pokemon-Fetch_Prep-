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
        
        <div style = {{height:"34vh",width:"24%",backgroundColor:"rgb(255, 255, 255)",borderRadius:"1px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            {state && <img id = "pokemon-image"  onMouseEnter={()=>setImage(true)} onMouseLeave={()=>setImage(false)} src={image ? state.sprites?.other?.showdown?.front_default : state.sprites.other.dream_world.front_default !== null? state.sprites.other.dream_world.front_default : state.sprites.other.home.front_default !== null ? state.sprites.other.home.front_default:state.sprites.front_default}  alt={name} style={{width:"100px",height:"100px",objectFit:"contain"}}/>}
            <h1 style={{fontSize:"24px",fontWeight:"bold",fontFamily:"Arial, sans-serif"}}>{name}</h1>
            <button style={{backgroundColor:"lightgreen",borderRadius:"5px",fontSize:"18px",paddingLeft:"10px",paddingRight:"10px"}}>{state?.types.map((type)=>type.type.name).join(", ")}</button>
            <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",marginTop:"10px"}}>
                <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold"}}>
                    Height :
                </p>
                 {state?.height}
                </div>
                <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold"}}>
                    Weight :
                </p>
                 {state?.weight}
                </div>
                <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold"}}>
                    Speed :
                </p>
                 {state?.stats[5].base_stat}
                </div>
                
            </div>



            <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",marginTop:"4px"}}>
                <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold"}}>
                    Experience :
                </p>
                 {state?.base_experience}
                </div>
                <div style={{display:"flex"}}>
                <p style={{fontWeight:"bold"}}>
                    attack :
                </p>
                 {state?.stats[1].base_stat}
                </div>
                
                
            </div>




        </div>
        </>
    )
}

export default Cards;