import React from "react";

const CardBox = () => {
  let cardInfo = [
    {
      title: "Home",
      description:
        "After85. Technology. Innovation. Inspiration. To be of service. What do they have in common? All things to help push culture and society forward",

      imageUrl:
        "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
      buttonUrl: "#",
      buttonLabel: "Find Out More!",
    },

    {
      title: "About",
      description:
        "Our mission is to be of service and help push culture forward through innovation, inspiration, media and technology",

      imageUrl:
        "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
      buttonUrl: "#",
      buttonLabel: "Find Out More!",
    },

    {
      title: "Services",
      description:
        "Here at After85, we believe that the greatest deed we can provide to each other is to be of service. We aim to accomplish that goal with everything we do",
      imageUrl:
        "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
      buttonUrl: "#",
      buttonLabel: "Find Out More!",
    },

    {
      title: "Contact",
      description: "website: Email: Twitter: linkedIn: gitHub:",
      imageUrl:
        "https://edgewoodreit.com/wp-content/uploads/2018/01/500x325-300x195.png",
      buttonUrl: "#",
      buttonLabel: "Find Out More!",
    },
  ];
  return (
    // <div className="row">
    <div className="d-flex flex-row justify-content-evenly flex-wrap">
      {cardInfo.map((card, index) => {
        return (
            <div className="card"  style={{width: "18rem"}}>
            <img className="card-img-top" src={card.imageUrl} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBox;
