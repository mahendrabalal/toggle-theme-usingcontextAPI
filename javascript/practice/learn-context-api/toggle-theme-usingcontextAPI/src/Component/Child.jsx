import React, {useContext} from "react";
import {MyContext} from '../App';

function Child() {
const {value, setValue} = useContext(MyContext);

    return (
        <div>
            <p>Value from context: {value}</p>
            <button onClick={() => setValue('New Value')} > Update Value</button>
        </div>
    )
}

export default Child;