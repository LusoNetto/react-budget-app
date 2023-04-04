import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);

    const handleChangeBudget = (valor) => {
        if(valor <= 20000){
            dispatch({
                type: "SET_BUDGET",
                payload: valor,
            }) 
        } else {
            alert("The value cannot exceed 20000£")
        }
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