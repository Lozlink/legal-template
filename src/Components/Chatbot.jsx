import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => setIsOpen(prev => !prev);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-[1000] bg-[#1413d6] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[141d36] transition md:px-5 md:py-3 text-sm md:text-base"
      >
        {isOpen ? 'Close Chat' : 'Chat with Us'}
      </button>

  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bg-[#141d36] bottom-20 right-6 z-[999] w-[90vw] max-w-[400px] shadow-2xl rounded-lg overflow-hidden"
          >
            <zapier-interfaces-chatbot-embed
              is-popup="false"
              chatbot-id="cmalocxub005ygxzjyqy2039z"
              height="600px"
              width="100%"
            ></zapier-interfaces-chatbot-embed>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


function ChatBot() {
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

export default {
  ChatBot,
  ChatbotToggle
}