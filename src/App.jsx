import React, { useEffect, useState } from "react";
import "./components/chat.css";
import { PlusCircle, Bell, Trash, Smile } from "lucide-react";
import { Chat } from "./components/data";
import { InputLeft, InputRight } from "./components/input/Input";
import { EmojiLeft, EmojiRight } from "./components/emojis/emoji";
const emojis = ["😟", "😍", "😭", "❤️"];

const App = () => {
  const [collapseleft, setCollapseLeft] = useState(true);
  const [collapseright, setCollapseRight] = useState(true);
  const [chat, setChat] = useState(Chat);
  const [inputleft, setInputLeft] = useState("");
  const [inputright, setInputRight] = useState("");
  const [leftclick, setLeftClick] = useState(false);
  const [rightclick, setRightClick] = useState(false);
  const [emojiset, setEmoji] = useState("");
  const [emojiright, setEmojiRight] = useState("");
  const [indexl, setIndexl] = useState(null);
  const [indexr, setIndexr] = useState(null);
  const [coll, setColl] = useState(false);
  const [colr, setColr] = useState(false);

  let today = new Date();
  let time1 = today.getHours() + ":" + today.getMinutes();

  const handleAddLeft = (e) => {
    e.preventDefault();
    const obj = { message: inputleft, time: time1 };
    Chat.push(obj);
    setInputLeft("");
    setChat(Chat);
  };

  const handleAddRight = (e) => {
    e.preventDefault();
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    const obj = { message: inputright, time: time };
    Chat.push(obj);
    setInputRight("");
    setChat(Chat);
  };

  const emojiHandlerLeft = (index) => {
    let x = index;
    let l1 = emojis.slice();
    let Z = l1.splice(x, 1)[0];
    console.log(Z);
    setEmoji(Z);
  };
  const emojiHandlerRight = (index) => {
    let x = index;
    let l1 = emojis.slice();
    let Z = l1.splice(x, 1)[0];
    console.log(Z);
    setEmojiRight(Z);
  };

  const handleDeleteLeft = (i) => {
    let x = i;
    let l = Chat.slice();
    let z = l.splice(x, 1)[0];
    setChat(l);
  };
  const handleDeleteRight = (i) => {
    let x = i;
    let l = Chat.slice();
    let z = l.splice(x, 1)[0];
    setChat(l);
  };

  const bell = (
    <div className="inactive">
      <Bell size={22} color="black" className="bell__icon" />
    </div>
  );

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
                      <div className="data" key={i}>
                        <Smile
                          size={22}
                          onClick={() => {
                            setIndexl(i), setColl(!coll);
                          }}
                          className="smile"
                        />
                        <div className="active__chat">
                          <span>{a.message}</span>
                          <span className="field__date">{a.time}</span>
                        </div>
                      </div>
                      {indexl == i && <p>{emojiset}</p>}

                      {indexl == i && coll ? (
                        <div className="emojis__row">
                          <EmojiLeft
                            handleDeleteLeft={handleDeleteLeft}
                            emojiHandlerLeft={emojiHandlerLeft}
                            emojis={emojis}
                            setChat={setChat}
                          />
                          <Trash onClick={() => handleDeleteLeft(i)} />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>

              {rightclick ? <span className="type">B is typing ..</span> : ""}
            </div>
            <InputLeft
              inputleft={inputleft}
              setInputLeft={setInputLeft}
              handleAddLeft={handleAddLeft}
              setLeftClick={setLeftClick}
              emojis={emojis}
            />
          </div>
        ) : (
          bell
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
                      <div className="data">
                        <Smile
                          size={22}
                          onClick={() => {
                            setIndexr(i), setColr(!colr);
                          }}
                          className="smile"
                        />
                        <div className="active__chat" key={i}>
                          <span>{data.message}</span>
                          <span className="field__date">{data.time}</span>
                        </div>
                      </div>
                      {indexr == i && <p>{emojiright}</p>}

                      {indexr == i && colr ? (
                        <div className="emojis_row">
                          <EmojiRight
                            emojis={emojis}
                            emojiHandlerRight={emojiHandlerRight}
                            handleDeleteRight={handleDeleteRight}
                            setChat={setChat}
                          />

                          <Trash onClick={() => handleDeleteRight(i)} />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              {leftclick ? <span className="type">A is typing ..</span> : ""}
            </div>
            <InputRight
              inputright={inputright}
              setInputRight={setInputRight}
              setRightClick={setRightClick}
              handleAddRight={handleAddRight}
              emojis={emojis}
            />
          </div>
        ) : (
          bell
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

export default App;
