import React from "react";

const Jumbotron = () => {
    let jumboText = {
        title: "A Warm Welcome!",
        description: "Welcome to The Future... Welcome to The Innovators... Welcome to After85",
        buttonLabel: "Tap In!",
        buttonURL: "#"
        };
    return (
        <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Welcome to After85</h1>
          <p>After85. Technology. Innovation. Inspiration. To be of service. What do they have in common? All things to help push culture and society forward</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        </div>
      </div>
            )
}


export default Jumbotron; 