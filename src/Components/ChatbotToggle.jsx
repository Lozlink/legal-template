import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

export default ChatbotToggle