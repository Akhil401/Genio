import React, { useEffect, useState } from "react";
import "./chat.css";
import { PlusCircle, Bell, Trash } from "lucide-react";
import { chat1, chat2 } from "../data";
import { InputLeft, InputRight } from "../input/Input";
const emojis = ["😟", "😍", "😭", "❤️"];

const Chat2 = () => {
  const [collapseleft, setCollapseLeft] = useState(true);
  const [collapseright, setCollapseRight] = useState(true);
  const [chatleft, setChatLeft] = useState(chat1);
  const [chatright, setChatRight] = useState(chat2);
  const [inputleft, setInputLeft] = useState("");
  const [inputright, setInputRight] = useState("");
  const [leftclick, setLeftClick] = useState(false);
  const [rightclick, setRightClick] = useState(false);
  const [emojiset, setEmoji] = useState("");
  const [emojiright, setEmojiRight] = useState("");

  let today = new Date();
  let time1 = today.getHours() + ":" + today.getMinutes();

  const handleAddLeft = (e) => {
    e.preventDefault();
    const obj = { message: inputleft, time: time1 };
    chat1.push(obj);
    setInputLeft("");
    setChatLeft(chat1);
  };

  const handleAddRight = (e) => {
    e.preventDefault();
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    const obj = { message: inputright, time: time };
    chat2.push(obj);
    setInputRight("");
    setChatRight(chat2);
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
    let l = chat1.slice();
    let z = l.splice(x, 1)[0];
    setChatLeft(l);
  };
  const handleDeleteRight = (i) => {
    let x = i;
    let l = chat2.slice();
    let z = l.splice(x, 1)[0];
    setChatRight(l);
  };

  return (
    <div className="chat__windows">
      <div className="left__side">
        {collapseleft ? (
          <div className="left__chat" onBlur={() => setLeftClick(false)}>
            <div className="window__chat">
              <div className="sent__messages">
                {chatleft.map((a, i) => {
                  return (
                    <div className="message">
                      <div className="chatdata" key={i}>
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
              <div className="recieved__messages">
                {chatright.map((data, i) => {
                  return (
                    <div className="message">
                      <div className="chatdata" key={i}>
                        <span>{data.message}</span>
                        <span className="field__date">{data.time}</span>
                      </div>
                      <p>{emojiright}</p>
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
                        <Trash onClick={() => handleDeleteRight(i)} />
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
              <div className="recieved__messages">
                {chatleft.map((a, i) => {
                  return (
                    <div className="message">
                      <div className="chatdata" key={i}>
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
              <div className="sent__messages">
                {chatright.map((data, i) => {
                  return (
                    <div className="message">
                      <div className="chatdata" key={i}>
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

export default Chat2;
