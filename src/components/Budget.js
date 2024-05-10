import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        console.log('set new budget', event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: &#163;{budget}</span> */}
            <span>Budget: &#163;</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget;