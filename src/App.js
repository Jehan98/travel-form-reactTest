import React from "react";
import Style from "./Style.css";
import JokesData from "./JokesData";
import Jokes from "./Jokes";

function App(){
    const JokeComponents = JokesData.map(joke => <Jokes key={joke.id} question = {joke.question} answer={joke.answer}/>)
    return (
        <div className="Hi">
            {JokeComponents}
        </div>
    )
}

export default App