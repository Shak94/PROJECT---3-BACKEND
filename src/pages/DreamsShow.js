import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";    

function DreamsShow (){
    const[dream, setDream] = useState([]);
    const dreamID = params.useParams();
    async function getDream(){
        try{
            let singleDream = await fetch(`http://localhost:4000/dreams/${dreamId}`)
            singleDream = await singleDream.json();
            setDream(singledream);
        } catch(error){
            console.log(error)
        }
    }
    return(
 
    <>
    <h1> Dream Show page</h1>
    </>
    )
}   

export default DreamsShow;