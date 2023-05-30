import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function DreamsIndex() {
  const [dreams, setDreams] = useState([]);

  const [dreamsForm, setDreamsForm] = useState({
    title: "",
    meaning: "",
    image: "",
  });

  async function getDreams() {
    try {
      let apiDreams = await fetch("http://localhost:4000/dreams");
      apiDreams = await apiDreams.json();
      setDreams(apiDreams);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDreams();
  }, []);

  function loader(arr) {
    return (
      <>
          <div className="dreambody">
        {arr.map((dream, idx) => {
          return (
            <div className="dream-item" key={idx}>
              <Link to={`/dreams/${dream._id}`}>
                <h1 className="dream-title"> Title: {dream.title}</h1>
              </Link>
              <p className="dream-meaning" >Meaning: {dream.meaning}</p>
              <img src={dream.image} alt="Dream " className="dream-image"/>
            </div>
          );
        })}
        </div>
      </>
    );
  }

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

    
      <form onSubmit={handleSubmit}>
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
      {dreams.length ? loader(dreams) : <h3>One Moment</h3>}
    </>
  );
}

export default DreamsIndex;
