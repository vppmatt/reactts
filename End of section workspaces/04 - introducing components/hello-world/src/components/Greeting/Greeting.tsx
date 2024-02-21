import './Greeting.css';

const Greeting = (props: GreetingProps) : JSX.Element => {

    return (
        <div>
            <p className="greeting_text"> Hello {props.name}. You are {props.age} years old. </p>
        </div>
    );
}

export default Greeting;

type GreetingProps = {name: string, age: number};