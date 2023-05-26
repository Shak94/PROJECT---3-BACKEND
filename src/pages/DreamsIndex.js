import { Link } from "react-router-dom";
import { useState,useEffect } from "react";


function DreamsIndex(){ 
    const [dreams, SetDreams] = useState([]);

    const[dreamsForm,setDreamsForm] = useState({
        title:"",
        meaning:"",
        image:"",
    })

    async function getDreams(){
        try{
            let apiDreams = await fetch('http://localhost:4000/dreams')
            apiDreams = await apiDreams.json()
            SetDreams(apiDreams);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() =>{
        getDreams();
    }, []);
    
    function loader(arr){
        return (
            <>
              {arr.map((dream, idx) => {
                return (
                  <div key={idx}>
                    <Link to={`/dreams/${dream._id}`}>
                      <h1>Title: {dream.title}</h1>
                    </Link>
                    <h2>Meaning: {dream.meaning}</h2>
                    <h2>Image: {dream.image}</h2>
                  </div>
                );
              })}
            </>
          );
        }
    
    return(

    <> 
    <h1> My dream index</h1>
    </>
    )
    function handleChange(e){
        console.log(e.target)
        setDreamsForm((previousFormState) =>({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
        }
        
        async function handleSubmit(e){
            try{
                e.preventDefault();
                await fetch ('http://localhost:4000/dreams',{
                    method:"POST",
                   headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dreamsForm)
                })
            } catch (error){
        
                console.log(error)
            }
            
        }
        return(
            <>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type ="text" name="title" onChange={handleChange} placeholder="Dream"/>
                <label> Meaning:</label>
                <input type ="text" name="meaning" onChange={handleChange} placeholder="Dream's Meaning"/>
                <label>Image:</label>
                <input type ="text" name="Image" onChange={handleChange} placeholder="Dream's Image"/>
                <button> Add Dream</button>

            </form>
            {dreams.length ? useLoaderData(dreams):<h3> One Moment</h3>}
            </>
        )
}   






export default DreamsIndex;