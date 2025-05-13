import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // load script for chatbot
    const script = document.createElement('script');
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    // remove it
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[999] transform translate-y-[-10px] translate-x-[-10px]">      
    <zapier-interfaces-chatbot-embed
        is-popup="true"
        chatbot-id="cmalocxub005ygxzjyqy2039z"
        height="600px"
        width="400px"
      ></zapier-interfaces-chatbot-embed>
    </div>
  );
};

export default Chatbot;