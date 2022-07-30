import {FC, useState} from "react";
import './Greeting.css';

const Greeting : FC<GreetingProps> = ({name,age}) => {

    const [currentName, setCurrentName] = useState(name);

    const changeName = () => {
        name="james";
        console.log("button was clicked");
        setCurrentName("James");
    }

    return (
        <div>
            <p className="greeting_text"> Hello {currentName}. You are {age} years old. </p>
            <button onClick={changeName} >change my name</button>
    </div>
);
}

type GreetingProps = {
    name : string,
    age : string
}

export default Greeting;
