import { useState } from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { OptionInput } from "./components/OptionInput";
import { Options } from "./components/Options";
import { Results } from "./components/Results";

function App() {
  const voteCount = () => Math.floor(Math.random() * 100) + 1;

  const movies = [
    { name: "Pulp Fiction", votes: voteCount() },
    { name: "The Godfather", votes: voteCount() },
    { name: "Schindler's List", votes: voteCount() },
    { name: "The Dark Knight", votes: voteCount() },
    { name: "Forrest Gump", votes: voteCount() },
    { name: "Inception", votes: voteCount() },
    { name: "The Matrix", votes: voteCount() },
    { name: "Fight Club", votes: voteCount() },
    {
      name: "The Lord of the Rings: The Return of the King",
      votes: voteCount(),
    },
  ];

  const [options, setOptions] = useState(movies);
  const [voted, setVoted] = useState(false);

  const addItem = (data: string) => {
    setOptions([...options, { name: data, votes: 0 }]);
  };

  const handleVoteUpdate = (
    updatedOptions: { name: string; votes: number }[]
  ) => {
    setOptions(updatedOptions);
    setVoted(true);
  };

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.VotingPrompt}>What is your favorite movie?</div>
      <OptionInput newItem={addItem} />
      <Options options={options} onVote={handleVoteUpdate} />
      {voted && <Results data={options} />}
    </div>
  );
}

export default App;
