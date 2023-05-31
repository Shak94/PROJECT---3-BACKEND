import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function DreamsIndex() {
  const [dreams, setDreams] = useState([]);


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
            <Link to={'/dreams/dreamform'}>
            </Link>
              <Link to={`/dreams/${dream._id}`}>
                <h1 className="dream-title">  {dream.title}</h1>
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




  return (
    <>

    
     <button>
      <Link to ="/dreamsform">ADD DREAM</Link>
     </button>
      {dreams.length ? loader(dreams) : <h3>One Moment</h3>}
    </>
  );
}

export default DreamsIndex;
