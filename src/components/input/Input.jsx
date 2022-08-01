import React, { useRef, useState } from "react";
import "../chat.css";
import { Smile, Send } from "lucide-react";

export const InputLeft = ({
  inputleft,
  setInputLeft,
  setLeftClick,
  handleAddLeft,
  emojis,
}) => {
  const [picker, setPicker] = useState(false);
  const [emojiaction, setEmojiaction] = useState("");

  const emojiBar = (i) => {
    let x = i;
    let l1 = emojis.slice();
    let Z = l1.splice(x, 1)[0];
    console.log(Z);
    setEmojiaction(Z);
    setInputLeft((input) => input + emojiaction);
    setPicker(true);
  };

  return (
    <div className="actions">
      <Smile onClick={() => setPicker(!picker)} className="smile__picker" />
      {picker ? (
        <div>
          {emojis.map((a, i) => {
            return (
              <span key={i} onClick={() => emojiBar(i)}>
                {a}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}

      <input
        value={inputleft}
        onChange={(e) => setInputLeft(e.target.value)}
        type="text"
        placeholder="Message..."
        className="left__input"
        onClick={() => setLeftClick(true)}
      />
      <Send
        size={30}
        color="black"
        className="send__button"
        onClick={(e) => handleAddLeft(e)}
      />
    </div>
  );
};

export const InputRight = ({
  inputright,
  setInputRight,
  setRightClick,
  handleAddRight,
  emojis,
}) => {
  const [picker, setPicker] = useState(false);
  const [emojiaction, setEmojiaction] = useState("");

  const emojiBar = (i) => {
    let x = i;
    let l1 = emojis.slice();
    let Z = l1.splice(x, 1)[0];
    console.log(Z);
    setEmojiaction(Z);
    setInputRight((input) => input + emojiaction);
    setPicker(true);
  };
  return (
    <div className="actions">
      <Smile onClick={() => setPicker(!picker)} />
      {picker ? (
        <div>
          {emojis.map((a, i) => {
            return (
              <span key={i} onClick={() => emojiBar(i)}>
                {a}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <input
        value={inputright}
        onChange={(e) => setInputRight(e.target.value)}
        type="text"
        placeholder="Message..."
        className="left__input"
        onClick={() => setRightClick(true)}
      />
      <Send
        size={30}
        color="black"
        className="send__button"
        onClick={(e) => handleAddRight(e)}
      />
    </div>
  );
};
