import React, { useContext } from "react";
import MyContext from '../App.jsx'

function ChildComponent() {
const sharedData = React.useContext(MyContext);


return (
    <div>
        {sharedData};
    </div>
)
}

export default ChildComponent;