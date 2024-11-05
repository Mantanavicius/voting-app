import { useState } from "react";
import styles from "../styles/Options.module.scss";

interface OptionsProps {
  options: {
    name: string;
    votes: number;
  }[];
  onVote: (updatedOptions: { name: string; votes: number }[]) => void;
}

export function Options({ options, onVote }: OptionsProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleVote = () => {
    if (selectedOption !== null) {
      const updatedOptions = options.map((option, index) =>
        index === selectedOption ? { ...option, votes: option.votes + 1 } : option
      );
      onVote(updatedOptions);
      setSelectedOption(null);
    }
  };

  return (
    <div className={styles.Options}>
      <div className={styles.OptionButtons}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {setSelectedOption(index)}}
            style={{ backgroundColor: selectedOption === index ? "#000000" : "" ,
              color: selectedOption === index ? "#ffffff" : "",
              boxShadow: selectedOption === index ? "inset 0 0 0 2px #ffffff" : ""
            }}
          >
            {option.name}
          </button>
        ))}
      </div>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
}
