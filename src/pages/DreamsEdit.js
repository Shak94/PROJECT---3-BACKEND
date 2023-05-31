import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
function DreamsEdit() {
    const { dreamId } = useParams();
    const [dream, setDream] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const getDream = async () => {
            try {
                let singleDream = await fetch(`http://localhost:4000/dreams/${dreamId}`);
                singleDream = await singleDream.json();
                setDream(singleDream);

            } catch (error) {
                console.log(error)
            }
        }
        getDream();
    }, [dreamId]);
    function handleChange(e) {
        setDream((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        })
        )
    }
    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const updatedDream = await fetch(`http://localhost:4000/dreams/${dreamId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dream)
            });
            if (updatedDream) {
                return navigate(`/dreams/${dreamId}`)
            }

        } catch (error) {
            console.log(error);
        }
    }
    function loaded() {
        return (

            <>
                <h1> Change {dream.title}</h1>
                <form onSubmit={handleSubmit}>
                    Title: <input type="text" value={dream.title} name="title" onChange={handleChange} />
                    Meaning: <input type="text" value={dream.meaning} name="meaning" onChange={handleChange} />
                    Image : <input type="text" value={dream.image} name="image" onChange={handleChange} />
                    <button> Click Here to Finalize Change</button>
                </form>
            </>
        )
    }

    return (
        <>
            {dream ? loaded() : <h1> One Moment ...</h1>}
        </>
    )
}
export default DreamsEdit;