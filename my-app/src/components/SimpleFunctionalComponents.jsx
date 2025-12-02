import React from "react";

function SimpleFunctionalComponent(props) {
    return(
        <div>
            <h1>Welcome to My App</h1>
            {props.students.map(element => {
                return (
                    <div key={element.name}>
                        <h2>{element.name}</h2>
                        <p>Age: {element.age}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default SimpleFunctionalComponent;