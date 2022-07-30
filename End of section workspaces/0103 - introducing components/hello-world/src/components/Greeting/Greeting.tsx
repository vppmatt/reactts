import {FC} from "react";
import './Greeting.css';

const Greeting : FC<GreetingProps> = ({name,age}) => {

    return (
        <div>
            <p className="greeting_text"> Hello {name}. You are {age} years old. </p>
    </div>
);
}

type GreetingProps = {
    name : string,
    age : string
}

export default Greeting;
