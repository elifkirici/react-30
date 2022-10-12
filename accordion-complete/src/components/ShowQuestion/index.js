import React from "react";
import InfoBtn from "../Button/InfoBtn";

function ShowQuestion({ selected, setSelected }) {
  const questions = [
    {
      id: 1,
      question: "Do I have to allow the use of cookes?",
      info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      question: "How do I change my My Page password?",
      info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      question: "What is Bank ID?",
      info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      question: "Whose birth number can I use?",
      info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      id: 5,
      question: "When do I recieve a password ordered by letter?",
      info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
    },
  ];
  const listItem = questions.map((ques, index) => (
    <div key={index} className="question row ">
      <div className="col-12 col-sm-11 col-md-11 col-lg-11">
        {ques.question}
      </div>
      <div className="col-12 col-sm-1 col-md-1 col-lg-1">
        <InfoBtn index={index} selected={selected} setSelected={setSelected} />
      </div>
      <div className={selected === index ? "content-show" : "content"}>
        {ques.info}
      </div>
    </div>
  ));
  return (
    <div className="main">
      <div className="row">
        <div className="col-12 col-md-4 col-sm-4 col-lg-4">
          <h2>
            Questions And Answers About <br /> Login
          </h2>
        </div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-8">
          <div className="questions">{listItem}</div>
        </div>
      </div>
    </div>
  );
}

export default ShowQuestion;
