import { useState } from "react";
import styles from "../styles/optionInput.module.scss";

interface OptionInputProps {
  newItem: (text: string) => void;
}

export function OptionInput({ newItem }: OptionInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    text && newItem(text);
    setText("");
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.OptionInput}>
      <input type="text" onChange={handleInput} value={text}/>
      <button type="submit">Add a different option</button>
    </form>
  );
}
