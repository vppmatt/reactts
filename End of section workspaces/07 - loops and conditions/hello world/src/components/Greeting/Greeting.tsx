import { ReactElement, useState } from 'react';
import './Greeting.css';

const Greeting = (props: GreetingProps) : ReactElement => {
    
    const [currentName, setCurrentName] = useState<string>(props.name);

    const changeName = () : void => {
        console.log("button was clicked");
        //props.name="james";
        setCurrentName("James");
    }

    return (
        <div>
            <p className="greeting_text"> Hello {currentName}. You are {props.age} years old. </p>
            <button onClick={changeName} >change my name</button>
        </div>
    );
}

export default Greeting;

type GreetingProps = {name: string, age: number};