import { Link } from "react-router-dom";
import { useState } from "react";

function DreamsForm(){

  const [dreamsForm, setDreamsForm] = useState({
    title: "",
    meaning: "",
    image: "",
  });
    function handleChange(e) {
        console.log(e.target);
        setDreamsForm((previousFormState) => ({
          ...previousFormState,
          [e.target.name]: e.target.value,
        }));
      }
    
      async function handleSubmit(e) {
        try {
          e.preventDefault();
          await fetch("http://localhost:4000/dreams", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dreamsForm),
          });
        } catch (error) {
          console.log(error);
        }
      }
    
      return (
        <>
    
        
          <form className="dreams-form" onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Dream"
              />
            </div>
            <div>
              <label>Meaning:</label>
              <input
                type="text"
                name="meaning"
                onChange={handleChange}
                placeholder="Dream's Meaning"
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                placeholder="Dream's Image"
              />
            </div>
            <button>Add Dream</button>
          </form>
        </>
      );

}
export default  DreamsForm;