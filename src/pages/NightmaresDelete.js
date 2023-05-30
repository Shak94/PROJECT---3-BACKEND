import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function NightmaresDelete(){
    const{nightmmareId} = useParams;

    async function deletedNightmare(){
        try{

      await fetch (`http://localhost:4000/nightmares/${nightmareId}`),{

          method: "DELETE",
          headers:{
            "Conetent-Type": "application/json"
          }
      } ,
      useNavigate("/Nightmares");
    
        } catch (error){
            console.log(error);
        }

    }
    return (
        <>
        <h3>Delete This Nightmare</h3>
        <Link to ='/nigthmnares'>
            <button onClick ={deletedNightmare}> 🗑️ </button>
        < Link to = {`/nighgmares/${nightmareId}`}/>
        <button>   Cancel </button>
        </Link>
        
        </>
    )
}

export default NightmaresDelete;