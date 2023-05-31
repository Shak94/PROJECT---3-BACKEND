
import { useState} from "react";

function NightmaresForm(){

    const [nightmaresForm, setNightmaresForm] = useState({
        title: "",
        meaning: "",
        image: "",
      });
  function handleChange(e) {
    console.log(e.target);
    setNightmaresForm((previousFormState) => ({
      ...previousFormState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await fetch("http://localhost:4000/nightmares", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nightmaresForm),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
  
      
      <form className="nightmare-form" onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Nightmare"
          />
        </div>
        <div>
          <label>Meaning:</label>
          <input
            type="text"
            name="meaning"
            onChange={handleChange}
            placeholder="Nightmare's Meaning"
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            placeholder="Nightmares Image"
          />
        </div>
        <button>Add Nightmare</button>
      </form>

    </>
  );
}

export default NightmaresForm;