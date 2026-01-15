
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { useFeedback } from '../context/FeedbackContext';
import db from "../firebase";

export default function Testimonials() {
  const { testimonials, setTestimonials, lastUpdate } = useFeedback();
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const q = query(collection(db, 'feedback'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const feedbackData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate()
        }));

        const sortedFeedback = feedbackData.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.timestamp - a.timestamp;
        });

        setTestimonials(sortedFeedback);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, [lastUpdate, setTestimonials]);

  return (
    <div className="py-16 bg-gradient-to-r from-blue-100 via-white to-blue-100 relative">
      <h2 className="text-4xl font-bold font-[lato] text-center">
        What People Think <span className="text-blue-500 font-[lato]">About Us</span>
      </h2>

      <div className="relative flex justify-center items-center mt-10">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex space-x-6 px-4 max-w-7xl mx-auto mt-10">
            {testimonials.map((testimonial) => {
              const isExpanded = expanded[testimonial.id] || false;
              const truncatedText = testimonial.message.length > 100 ? testimonial.message.substring(0, 100) + "..." : testimonial.message;

              return (
                <motion.div
                  key={testimonial.id}
                  className="bg-white shadow-xl font-[lato] p-4 sm:p-6 rounded-lg border border-gray-200 backdrop-blur-md bg-opacity-75 transition-transform transform hover:scale-105 hover:shadow-2xl 
                  w-80 sm:w-96 flex-shrink-0 h-auto flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-600 font-[lato] mt-3 italic overflow-y-auto text-sm sm:text-base flex-grow">
                    {isExpanded ? testimonial.message : truncatedText}
                  </p>

                  {testimonial.message.length > 100 && (
                    <button 
                      onClick={() => setExpanded(prev => ({ ...prev, [testimonial.id]: !prev[testimonial.id] }))}
                      className="text-blue-500 text-sm mt-2 font-semibold underline cursor-pointer"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="mt-4 pt-2 border-t border-gray-100">
                    <h4 className="text-base sm:text-lg font-semibold font-[lato] text-gray-800">
                      {testimonial.full_name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {new Date(testimonial.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
