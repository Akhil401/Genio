import React, { useEffect, useState } from "react";
import "./chat2.css";
import { PlusCircle, Bell, Trash } from "lucide-react";
import { Chat3 } from "../data";
import { InputLeft, InputRight } from "../input/Input";
const emojis = ["😟", "😍", "😭", "❤️"];

const Chat = () => {
  const [collapseleft, setCollapseLeft] = useState(true);
  const [collapseright, setCollapseRight] = useState(true);
  const [chat, setChat] = useState(Chat3);
  // const [chatright, setChatRight] = useState(chat2);
  const [inputleft, setInputLeft] = useState("");
  const [inputright, setInputRight] = useState("");
  const [leftclick, setLeftClick] = useState(false);
  const [rightclick, setRightClick] = useState(false);
  const [emojiset, setEmoji] = useState("");
  const [emojiright, setEmojiRight] = useState("");

  let today = new Date();
  let time1 = today.getHours() + ":" + today.getMinutes();

  chat.sort(({ time: a }, { time: b }) => (a > b ? 1 : a < b ? -1 : 0));

  const handleAddLeft = (e) => {
    e.preventDefault();
    const obj = { message: inputleft, time: time1 };
    Chat3.push(obj);
    setInputLeft("");
    setChat(Chat3);
  };

  const handleAddRight = (e) => {
    e.preventDefault();
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    const obj = { message: inputright, time: time };
    Chat3.push(obj);
    setInputRight("");
    setChat(Chat3);
  };

  const emojiHandlerLeft = (index) => {
    let x = index;
    let l1 = emojis.slice();
    let Z = l1.splice(x, 1)[0];
    console.log(Z);
    setEmoji(Z);
  };

  const handleDeleteLeft = (i) => {
    let x = i;
    let l = Chat3.slice();
    let z = l.splice(x, 1)[0];
    setChat(l);
  };
  const handleDeleteRight = (i) => {
    let x = i;
    let l = chat.slice();
    let z = l.splice(x, 1)[0];
    setChat(l);
  };

  return (
    <div className="chat__windows">
      <div className="left__side">
        {collapseleft ? (
          <div className="left__chat" onBlur={() => setLeftClick(false)}>
            <div className="window__chat">
              <div className="messages__left">
                {chat.map((a, i) => {
                  return (
                    <div className="message__left">
                      <div className="active__chat" key={i}>
                        <span>{a.message}</span>
                        <span className="field__date">{a.time}</span>
                      </div>
                      <p>{emojiset}</p>
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
                        <Trash onClick={() => handleDeleteLeft(i)} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {rightclick ? <span>B is typing ..</span> : ""}
            </div>
            <InputLeft
              inputleft={inputleft}
              setInputLeft={setInputLeft}
              handleAddLeft={handleAddLeft}
              setLeftClick={setLeftClick}
            />
          </div>
        ) : (
          <div className="inactive">
            <Bell size={22} color="black" className="bell__icon" />
          </div>
        )}

        <PlusCircle
          size={35}
          color="black"
          onClick={() => setCollapseLeft(!collapseleft)}
        />
      </div>
      <div className="right__side">
        {collapseright ? (
          <div className="right__chat" onBlur={() => setRightClick(false)}>
            <div className="window__chat">
              <div className="messages__right">
                {chat.map((data, i) => {
                  return (
                    <div className="message__right">
                      <div className="active__chat" key={i}>
                        <span>{data.message}</span>
                        <span className="field__date">{data.time}</span>
                      </div>
                      <p>{emojiset}</p>
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
                        <Trash onClick={() => handleDeleteLeft(i)} />
                      </div>
                    </div>
                  );
                })}
              </div>
              {leftclick ? <span>A is typing ..</span> : ""}
            </div>
            <InputRight
              inputright={inputright}
              setInputRight={setInputRight}
              setRightClick={setRightClick}
              handleAddRight={handleAddRight}
            />
          </div>
        ) : (
          <div className="inactive">
            <Bell size={22} color="black" className="bell__icon" />
          </div>
        )}
        <PlusCircle
          size={35}
          color="black"
          onClick={() => setCollapseRight(!collapseright)}
        />
      </div>
    </div>
  );
};

export default Chat;
