import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function NightmaresShow() {
    const [nightmare, setNightmare] = useState(null);
    const { nightmareId } = useParams();
    async function getNightmare() {
        try {
            let singleNightmare = await fetch(`http://localhost:4000/nightmares/${nightmareId}`)
            singleNightmare = await singleNightmare.json();
            setNightmare(singleNightmare);
        } catch (error) {
            console.log(error)
        }
    }

    function nightmareLoaded() {

        return (
            <>
                <h1> Title: {nightmare.title}</h1>
                <h1> Meaning: {nightmare.meaning}</h1>
                <img src={nightmare.image} alt="Nightmare Name" />
                <Link to={`/nightmares/${nightmareId}/edit`}>\
                    <button> EDIT </button>
                </Link>
                <Link to={`/nightmares/${nightmareId}/delete`}>\
                    <button> DELETE </button>
                </Link>
            </>
        )
    }
    useEffect(() => {
        getNightmare()
    });
    return (
        <>
            {nightmare ? nightmareLoaded() : <h2> One Moment</h2>}
        </>
    )

}

export default NightmaresShow;