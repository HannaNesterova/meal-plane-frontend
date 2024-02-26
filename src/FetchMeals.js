import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get("https://meal-plane-backend.onrender.com")
    .then(({data}) => {console.log(data)
    setMeal(data)
    }) 
}

const addMeal = (title, setTitle, setMeal) => {
    axios.post("https://meal-plane-backend.onrender.com/saveMeals", {title})
    .then((data) => {console.log(data) //что это за data откуда мы ее берем и что она обозначает
    setTitle('')
    getAllMeals(setMeal)
})
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => { 
    axios.put('https://meal-plane-backend.onrender.com/editMeal', {title, _id:mealId})
    .then((data) => {
        setTitle('')
        setEditing(false)
        getAllMeals(setMeal)
    })
}

const deleteMeal = (_id, setMeal) => {
    axios.post('https://meal-plane-backend.onrender.com/deleteMeal', { _id })
    .then((data) => {
        getAllMeals(setMeal)
    })
}



export {getAllMeals, addMeal, editMeal, deleteMeal};