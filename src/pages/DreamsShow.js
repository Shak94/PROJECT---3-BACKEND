import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";    

function DreamsShow (){
    const[dream, setDream] = useState([]);
    const { dreamId } = useParams();
    async function getDream(){
        try{
            let singleDream = await fetch(`http://localhost:4000/dreams/${dreamId}`)
            singleDream = await singleDream.json();
            setDream(singleDream);
        } catch(error){
            console.log(error)
        }
    }

    function dreamLoaded(){

        return(
            <>
        <h1> Title: {dream.title}</h1>
        <h1> Meaning: {dream.meaning}</h1>
        <img src={dream.image} alt="Dream Name" />
        <Link to={`/dreams/${dreamId}/edit`}>\
        <button> EDIT </button>
        </Link>
        <Link to={`/dreams/${dreamId}/delete`}>\
        <button> DELETE </button>
        </Link>

        </>
        )
    }
    useEffect(() =>{
        getDream()
    },[]);

    return(
        <>
        {dream ? dreamLoaded(): <h2> One Moment</h2>}
        </>
    )
 
}   

export default DreamsShow;