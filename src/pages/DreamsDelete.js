import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function DreamsDelete(){
    const{dreamId} = useParams;

    async function deletedDream(){
        try{

            let singleDream = await fetch (`http://localhost:4000/dreams/${dreamId}`);
            singleDream = await singleDream.json();
            setDream(singleDream);
        }

    }
}