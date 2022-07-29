import React, { useState } from "react";
import Chat2 from "./components/chat2/Chat2";
import Chat from "./components/chat/Chat";

const App = () => {
  return (
    <div>
      <Chat />
      <Chat2 />
    </div>
  );
};

export default App;
