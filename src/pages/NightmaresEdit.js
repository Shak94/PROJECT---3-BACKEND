import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
function NightmaresEdit(){
    const {nightmareId} =useParams();
    const[nightmare,setNightmare] = useState([]);
    const navigate = useNavigate();
    async function getNightmare(){
        try{
            let singleNightmare = await fetch (`http://localhost:4000/nightmares/${nigthmareId}`);
            singleNightmare = await singleNightmare.json();
            setNightmare(singleNightmare);

        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getNightmare();

    },[]);
    function handleChange(e){
        setNightmare((currentState) =>({
            ...currentState,
            [e.target.name]: e.target.value
        })
        )
    }
    async function handleSubmit(e){
        try{
            e.preventDefault();
            await fetch (`http://localhost:4000/nightmares/${nightmareId}`, {
                method:"PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nightmare)
            });
            return navigate(`http://localhost:4000/nightmares/${nightmareId}`)
            
        } catch(error){
            console.log(error);
        }
    }
    function loaded(){
        return(
        
            <>
            <h1> Change {nightmare.title}</h1>
            <form onSubmit ={handleSubmit}>
                Title: <input type ="text" value ={nightmare.title} name="title" onChange={handleChange}/>
                Meaning: <input type ="text" value ={nightmare.meaning} name="meaning" onChange={handleChange}/>
                Image : <input type ="text" value ={nightmare.image} name="image" onChange ={handleChange}/>
                <button> Click Here to Finalize Change</button>
            </form>
            </>
        )
    }

    return(
        <>
        {nightmare ? loaded(): <h1> One Moment ...</h1>}
        </>
    )
}
export default NightmaresEdit;