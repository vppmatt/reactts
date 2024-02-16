import { ReactElement } from 'react';
import './Greeting.css';

const Greeting = (props: GreetingProps) : ReactElement => {

    return (
        <div>
            <p className="greeting_text"> Hello {props.name}. You are {props.age} years old. </p>
        </div>
    );
}

export default Greeting;

type GreetingProps = {name: string, age: number};