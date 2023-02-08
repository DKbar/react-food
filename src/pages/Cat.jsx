import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";

export const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([])
    const {goBack} = useHistory();

    React.useEffect(
            () => {
                getFilteredCategory(name).then(data => setMeals(data.meals))
            },
            [name]
    )
    return <>
        <button className='btn' onClick={goBack}>Go Back</button>
        {!meals.length ? <Preloader /> : <MealList meals={meals}/>}
    </>
}
