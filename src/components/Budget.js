import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);

    const handleChangeBudget = (valor) => {
        dispatch({
            type: "SET_BUDGET",
            action: valor,
        }) 
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                value = {budget}
                step = {10}
                onChange= {(event) => handleChangeBudget(event.target.value)}
            ></input>
        </div>
    );
};
export default Budget;