import React from "react";
import "../chat.css";
import { Trash } from "lucide-react";
import { Chat } from "../data";

export const EmojiLeft = ({ emojiHandlerLeft, emojis, setChat }) => {
  const handleDeleteLeft = (i) => {
    let x = i;
    let l = Chat.slice();
    let z = l.splice(x, 1)[0];
    setChat(l);
  };
  return (
    <div className="emotions">
      {emojis.map((a, index) => {
        return (
          <span
            key={index}
            className="emoji__single"
            onClick={() => emojiHandlerLeft(index)}
          >
            {a}
          </span>
        );
      })}
    </div>
  );
};

export const EmojiRight = ({
  emojis,
  emojiHandlerRight,

  setChat,
}) => {
  const handleDeleteRight = (i) => {
    let x = i;
    let l = Chat.slice();
    let z = l.splice(x, 1)[0];
    setChat(l);
  };
  return (
    <div className="emotions">
      {emojis.map((a, index) => {
        return (
          <span
            key={index}
            className="emoji__single"
            onClick={() => emojiHandlerRight(index)}
          >
            {a}
          </span>
        );
      })}
    </div>
  );
};
