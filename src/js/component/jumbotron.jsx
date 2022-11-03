import React from "react";

const Jumbotron = () => {
    let jumboText = {
        title: "A Warm Welcome!",
        description: "Welcome to The Future... Welcome to The Innovators... Welcome to After85",
        buttonLabel: "Tap In!",
        buttonURL: "#"
        };
    return (
        <div className="jumbotron bg-light" >
            <h1 className="display-4">{jumboText.title}</h1>
            <p className="lead">{jumboText.description}</p>
            <a className="btn btn-primary btn-lg" href={jumboText.buttonURL} role="button">
                {jumboText.buttonLabel}
            </a>
        </div>
            )
}


export default Jumbotron; 