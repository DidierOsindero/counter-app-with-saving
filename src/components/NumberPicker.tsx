import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [stateCurrentEmoji, setStateCurrentEmoji] = useState("");
  const [statePreviousEmoji, setStatePreviousEmoji] = useState("");

  const handleChangeEmojiToClock = () => {
    setStatePreviousEmoji(stateCurrentEmoji);
    setStateCurrentEmoji("⏰");
  };

  const handleChangeEmojiToBed = () => {
    setStatePreviousEmoji(stateCurrentEmoji);
    setStateCurrentEmoji("🛌");
  };
  const handleChangeEmojiToEgg = () => {
    setStatePreviousEmoji(stateCurrentEmoji);
    setStateCurrentEmoji("🍳");
  };
  const handleChangeEmojiToPlate = () => {
    setStatePreviousEmoji(stateCurrentEmoji);
    setStateCurrentEmoji("🍽️");
  };
  const handleChangeEmojiToCheeky = () => {
    setStatePreviousEmoji(stateCurrentEmoji);
    setStateCurrentEmoji("😋");
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Current Emoji: {stateCurrentEmoji}</p>
      <p>Previous Emoji: {statePreviousEmoji}</p>
      <button onClick={handleChangeEmojiToClock}>⏰</button>
      <button onClick={handleChangeEmojiToBed}>🛌</button>
      <button onClick={handleChangeEmojiToEgg}>🍳</button>
      <button onClick={handleChangeEmojiToPlate}>🍽️</button>
      <button onClick={handleChangeEmojiToCheeky}>😋</button>
    </>
  );
}
