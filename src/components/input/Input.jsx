import React, { useRef } from "react";
import "../chat2/chat.css";
import { Send } from "lucide-react";

export const InputLeft = ({
  inputleft,
  setInputLeft,
  setLeftClick,
  handleAddLeft,
}) => {
  return (
    <div className="actions">
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
}) => {
  return (
    <div className="actions">
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
