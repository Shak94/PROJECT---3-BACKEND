import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NightmaresIndex() {
  const [nightmares, setNightmares] = useState([]);

  const [nightmaresForm, setNightmaresForm] = useState({
    title: "",
    meaning: "",
    image: "",
  });

  async function getNightmares() {
    try {
      let apiNightmares = await fetch("http://localhost:4000/nightmares");
      apiNightmares = await apiNightmares.json();
      setNightmares(apiNightmares);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNightmares();
  }, []);

  function loader(arr) {
    return (
      <>
          <div className="nightmarebody">
        {arr.map((nightmare, idx) => {
          return (
            <div className="nightmare-item" key={idx}>
              <Link to={`/nightmares/${nightmare._id}`}>
                <h1 className="nightmare-title "> {nightmare.title}</h1>
              </Link>
              <p className="nightmare-meaning">Meaning: {nightmare.meaning}</p>
              <img src={nightmare.image} alt="Nightmare Name" className="nightmare-image" />
              </div>
          );
        })}
        </div>
      </>
    );
  }

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
  
      
      <form onSubmit={handleSubmit}>
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
      {nightmares.length ? loader(nightmares) : <h3>One Moment</h3>}
    </>
  );
}

export default NightmaresIndex;