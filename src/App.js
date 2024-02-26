import { useEffect, useState } from 'react';
import './App.css';
import MyMeals from './MyMeals';
import { addMeal, getAllMeals, editMeal, deleteMeal } from './FetchMeals';



function App() {
const[myMeal, setMeal] = useState([]);
const [title, setTitle] = useState('');
const [editing, setEditing] = useState(false);
const [mealId, setMealId] = useState('');

useEffect(() => {
  getAllMeals(setMeal) //setMeals что это значит,откуда мы это берем и для чего,или это меняет наше состояние?
},[])

const updatingInInput = (_id, title) =>{
setEditing(true);
setTitle(title)
setMealId(_id)
}

  return (
    <div>
      <h1>MEAL PLAN</h1>
      <input type="text"
      placeholder="Add a meal"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button 
      disabled={!title}
      onClick={ editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) :
        () => addMeal(title, setTitle, setMeal)}>
        {editing ? 'EDIT' : 'ADD'}
      </button>

    {myMeal.map((meal) => <MyMeals key={meal._id}
     addText={meal.title}
     updatingInInput={() => updatingInInput(meal._id, meal.title)} 
     deleteMeal={() => deleteMeal(meal._id, setMeal)}
     />)}
    </div>
  );
}

export default App;
