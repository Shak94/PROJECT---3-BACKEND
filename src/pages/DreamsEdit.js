import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
function DreamsEdit(){
    const {dreamId} =useParams();
    const[dream,setDream] = useState([]);
    const navigate = useNavigate();
    async function getDream(){
        try{
            let singleDream = await fetch (`http://localhost:4000/dreams/${dreamId}`);
            singleDream = await singleDream.json();
            setDream(singleDream);

        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getDream();

    },[]);
    function handleChange(e){
        setDream((currentState) =>({
            ...currentState,
            [e.target.name]: e.target.value
        })
        )
    }
    async function handleSubmit(e){
        try{
            e.preventDefault();
            await fetch (`http://localhost:4000/dreams/${dreamId}`, {
                method:"PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dream)
            });
            return navigate(`http://localhost:4000/dreams/${dreamId}`)
            
        } catch(error){
            console.log(error);
        }
    }
    function loaded(){
        return(
        
            <>
            <h1> Change {dream.title}</h1>
            <form onSubmit ={handleSubmit}>
                Title: <input type ="text" value ={dream.title} name="title" onChange={handleChange}/>
                Meaning: <input type ="text" value ={dream.meaning} name="meaning" onChange={handleChange}/>
                Image : <input type ="text" value ={dream.image} name="image" onChange ={handleChange}/>
                <button> Click Here to Finalize Change</button>
            </form>
            </>
        )
    }

    return(
        <>
        {dream ? loaded(): <h1> One Moment ...</h1>}
        </>
    )
}
export default DreamsEdit;