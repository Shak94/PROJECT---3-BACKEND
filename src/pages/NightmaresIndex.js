import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NightmaresIndex() {
  const [nightmares, setNightmares] = useState([]);



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
  return (
    <>


      <button>
        <Link to="/nightmaresform">ADD Nightmare</Link>
      </button>
      {nightmares.length ? loader(nightmares) : <h3>One Moment</h3>}

    </>
  );
}




export default NightmaresIndex;