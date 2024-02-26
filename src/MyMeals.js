import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


function MyMeals({addText, updatingInInput, deleteMeal}) {
    return(
        <div>
            <p>{addText}</p>
            <CiEdit onClick={updatingInInput}/>
            <MdDelete onClick={deleteMeal}/>
        </div>
    )
}

export default MyMeals;