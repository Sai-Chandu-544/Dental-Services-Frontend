import React, { useState } from 'react';
import '../styles/faq.css';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide general dentistry, cosmetic procedures, braces, implants, and emergency dental care."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our Contact Us page or call us at +91 12345 67890."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major dental insurance plans. Contact us for more info."
  },
  {
    question: "Is dental treatment painful?",
    answer: "Most treatments are painless with modern techniques and anesthesia."
  },
  {
  question: "What are your clinic hours?",
  answer: "We’re open Monday to Saturday from 9:00 AM to 7:00 PM. Closed on Sundays and public holidays."
},

];

export const FAQ=() =>{
  const [Index, setIndex] = useState(null);

  const toggleFAQ = (index) => {
    setIndex(Index === index ? null : index);
  };

  return (
    <div id="faq"className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-symbol">
                {Index === index ? '-' : '+'}
              </span>
            </div>
            {Index === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


