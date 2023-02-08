import {Meal} from "./Meal";

export const MealList = (props) => {
    const {meals} = props;

    return <div className='list'>
        {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
    </div>
}