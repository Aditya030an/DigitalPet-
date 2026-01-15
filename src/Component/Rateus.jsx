// FeedbackForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Rateus = () => {
  const [feedbackData, setFeedbackData] = useState({
    full_name: '',
    email: '',
    message: '',
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleFeedback = (e) => {
    e.preventDefault();

    // Simple validation and mock submission
    if (feedbackData.full_name && feedbackData.email && feedbackData.message && rating > 0) {
      // You can integrate this with a backend API
      console.log('Feedback submitted:', { ...feedbackData, rating });

      setResult('Thank you for your feedback!');
      setFeedbackData({ full_name: '', email: '', message: '' });
      setRating(0);
      setHover(0);
    } else {
      setResult('Please complete all fields and provide a rating.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white p-10 rounded-lg shadow-md border border-gray-300 max-w-xl mx-auto my-12"
    >
      <h2 className="text-4xl font-[lato] font-bold text-gray-900 text-center mb-4">
        Feedback
      </h2>
      <p className="text-gray-700 font-[lato] text-lg text-center mb-6 leading-relaxed">
        We value your feedback! Help us improve by sharing your experience.
      </p>

      <form onSubmit={handleFeedback} className="space-y-6">
        <div>
          <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="full_name"
            value={feedbackData.full_name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={feedbackData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
            required
          />
        </div>

        <div className="flex flex-col font-[lato] items-center">
          <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
            Rate Our Service
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-3xl transition-all ${
                  (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={feedbackData.message}
            onChange={handleInputChange}
            placeholder="Write your message here..."
            rows="4"
            className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-gray-900 font-[lato] text-white font-semibold py-3 rounded-md shadow-md hover:bg-gray-800 transition-all text-lg"
          >
            Submit Feedback
          </button>
        </div>
      </form>

      <span className="block text-center text-sm mt-4 font-[lato] text-gray-700">{result}</span>
    </motion.div>
  );
};

export default Rateus;