import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function DreamsDelete() {
  const { dreamId } = useParams();
  const navigate = useNavigate();

  async function deleteDream() {
    try {
      const deletedDream = await fetch(`http://localhost:4000/dreams/${dreamId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(deletedDream)
      if (deletedDream) {
        return navigate('/dreams')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h3>Delete this dream</h3>
      <button onClick={deleteDream}> 🗑️ </button>
      <Link to={`/dreams/${dreamId}`}>Cancel</Link>
    </>
  );
}
export default DreamsDelete;