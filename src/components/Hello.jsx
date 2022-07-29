import React, { useState, useEffect } from "react";
import "./hello.css";

const Hello = () => {
  const [msg, setMag] = useState("hi");
  const chat1 = [
    {
      message: "hello",
      time: msg,
    },
    {
      message: "hello",
      time: msg,
    },
    {
      message: "hello",
      time: msg,
    },
    {
      message: "hello",
      time: msg,
    },
    {
      message: "hello",
      time: msg,
    },
    {
      message: "hello",
      time: msg,
    },
    {
      message: "hello",
      time: msg,
    },
    {
      message: "hello",
      time: msg,
    },
  ];
  const [chat, setChat] = useState(chat1);

  useEffect(() => {
    setTimeout(() => {
      setMag("hello");
    }, 5000);
  }, []);

  return (
    <div className="hello">
      <div className="left__hello">
        {chat.map((a, i) => {
          return (
            <div className="data" key={i}>
              <span>{a.message}</span>
              <span>{a.time}</span>
            </div>
          );
        })}
      </div>
      <div className="right__hello">
        {chat.map((a, i) => {
          return (
            <div className="data" key={i}>
              <span>{a.message}</span>
              <span>{a.time}</span>
            </div>
          );
        })}
      </div>
      <h1>{msg}</h1>
    </div>
  );
};
export default Hello;
