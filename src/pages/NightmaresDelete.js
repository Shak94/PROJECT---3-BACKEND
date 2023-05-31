import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NightmaresDelete(){
   const {nightmareId} = useParams()
   const navigate = useNavigate();

    async function deleteNightmare() {
        try {
        const deletedNightmare =  await fetch(`http://localhost:4000/nightmares/${nightmareId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        });
        console.log(deletedNightmare)
        if(deletedNightmare){
            return navigate(`/nightmares`)
        }
    } catch (error) {
        console.log(error);
    }
}
return (
    <>
        <h3>Delete This Nightmare</h3>
            <button onClick ={deleteNightmare}> 🗑️ </button>
        < Link to = {`/nightmares/${nightmareId}`}> Cancel</Link>
     
        
        
        </>
    )
}

export default NightmaresDelete;