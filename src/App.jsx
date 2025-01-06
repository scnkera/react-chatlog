import './App.css';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import messages from './data/messages.json';

const App = () => {
  const [chatMessages, setChatMessages] = useState(messages);

  const toggleLike = (id) => {
    const updatedMessages = chatMessages.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      return message;
    });
    setChatMessages(updatedMessages);
  };

  const totalLikes = chatMessages.filter((message) => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Vladmir and Estragon</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <ChatLog entries={chatMessages} onLike={toggleLike} />
    </div>
  );
};

export default App;