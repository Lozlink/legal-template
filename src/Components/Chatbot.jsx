import React, { useState } from 'react';


const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    const botMessage = { sender: 'bot', text: data.response };
    setMessages(prev => [...prev, botMessage]);
    setInput('');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="space-y-2 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === 'user' ? 'text-right' : 'text-left'}>
            <p className={`inline-block p-2 rounded ${m.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>{m.text}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input className="flex-1 border rounded px-2" value={input} onChange={e => setInput(e.target.value)} />
        <button className="ml-2 bg-blue-500 text-white px-4 py-1 rounded" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot