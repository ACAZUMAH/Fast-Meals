import React from 'react';
import MealsSummary from './summary/summary';
import AvailableMeals from './available/available';

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals />
        </React.Fragment>
    );
};

export default Meals