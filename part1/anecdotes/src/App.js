import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  // //  An array initially filled with values zero of the anecdotes array length
  const points = Array.apply(null, new Array(anecdotes.length)).map(
    Number.prototype.valueOf,
    0
  );

  // initial array copy
  const copy = [...points];

  // array state updater
  const [update, setUpdate] = useState(copy);

  // my function to handle the vote counts
  const myVotes = () => {
    update[selected] += 1;
    setUpdate([...update]);
  };

  // get the highest value from the copy array
  const maxValue = Math.max(...update);
  // store its index
  const arrIndex = update.indexOf(maxValue);
  // A function to hold the anecdote with the highes votes.
  const highestAnecdotes = () => {
    // use the index to display the anecdotes with the highest votes
    const quote = anecdotes[arrIndex];

    return quote;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} <br />
        {update[selected] === 1
          ? "has " + update[selected] + " vote"
          : "has " + update[selected] + " votes"}
      </p>

      <button onClick={myVotes}>vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        next anecdotes
      </button>

      <h2>Anecdotes with most votes</h2>
      <p>
        {highestAnecdotes()} <br />
        {maxValue === 1
          ? "has " + maxValue + " vote"
          : "has " + maxValue + " votes"}
      </p>
    </div>
  );
}

export default App;
