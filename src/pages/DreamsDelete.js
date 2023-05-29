import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function DreamsDelete(){
    const{dreamId} = useParams();

    async function deletedDream() {
        try {
          await fetch(`http://localhost:4000/dreams/${dreamId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          navigate("/dreams");
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <>
          <h3>Delete this dream</h3>
          <button onClick={deletedDream}> 🗑️ </button>
          <Link to={`/dreams/${dreamId}`}>Cancel</Link>
        </>
      );
    }
export default DreamsDelete;