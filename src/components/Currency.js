import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const { dispatch } = useContext(AppContext)
    const handleChangeCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    return(
        <select class="alert alert-success" onChange={(event) => handleChangeCurrency(event.target.value)}>
            <option value="$" hidden selected>Currency (£ Pound)</option>
            <option value="$">$ Dollar</option>            
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    )
}

export default Currency;