import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [stateCurrentEmoji, setStateCurrentEmoji] = useState("");
  const [stateSavedEmojis, setStateSavedEmojis] = useState<string[]>([]);

  const handleChangeEmojiToClock = () => {
    setStateSavedEmojis([...stateSavedEmojis, stateCurrentEmoji]);
    setStateCurrentEmoji("⏰");
  };

  const handleChangeEmojiToBed = () => {
    setStateSavedEmojis([...stateSavedEmojis, stateCurrentEmoji]);
    setStateCurrentEmoji("🛌");
  };
  const handleChangeEmojiToEgg = () => {
    setStateSavedEmojis([...stateSavedEmojis, stateCurrentEmoji]);
    setStateCurrentEmoji("🍳");
  };
  const handleChangeEmojiToPlate = () => {
    setStateSavedEmojis([...stateSavedEmojis, stateCurrentEmoji]);
    setStateCurrentEmoji("🍽️");
  };
  const handleChangeEmojiToCheeky = () => {
    setStateSavedEmojis([...stateSavedEmojis, stateCurrentEmoji]);
    setStateCurrentEmoji("😋");
  };

  if (stateSavedEmojis.length > 5) {
    setStateSavedEmojis(stateSavedEmojis.slice(1));
  }

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Current Emoji: {stateCurrentEmoji}</p>
      <p>
      Previous Emojis:{" "}
      <ol>{stateSavedEmojis.map((emoji, index) => (
      <li key={index}>{emoji}</li>)).reverse()}
      </ol>
      </p>
      <button onClick={handleChangeEmojiToClock}>⏰</button>
      <button onClick={handleChangeEmojiToBed}>🛌</button>
      <button onClick={handleChangeEmojiToEgg}>🍳</button>
      <button onClick={handleChangeEmojiToPlate}>🍽️</button>
      <button onClick={handleChangeEmojiToCheeky}>😋</button>
    </>
  );
}
