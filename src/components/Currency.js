const Currency = () => {
    return(
        <select class="alert alert-success">
            <option value="$" hidden selected>Currency (£ Pound)</option>
            <option value="$">$ Dollar</option>            
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    )
}

export default Currency;