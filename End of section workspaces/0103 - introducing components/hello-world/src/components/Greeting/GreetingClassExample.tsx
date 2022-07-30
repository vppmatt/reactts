import './Greeting.css';
import React from "react";

type GreetingProps = {
    name: string,
    age:string
}

type GreetingState = {
    name: string,
    age:string
}

class ClassGreetingExample extends React.Component<GreetingProps,GreetingState> {

    constructor(props : GreetingProps ) {
        super( props );
        this.state = {name: props.name, age : props.age};
    }

    render() {
        return (
            <div>
            <p className="greeting_text"> Hello {this.state.name}. You are {this.state.age} years old. </p>
        </div>);
    }

}



export default ClassGreetingExample;
