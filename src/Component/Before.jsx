


import { motion } from "framer-motion";
import ba13 from "./photos/b14.jpg";
import ba15 from "./photos/b16.jpg";
import ba17 from "./photos/b18.jpg";
import ba20 from "./photos/b20.jpg";
import ba21 from "./photos/b21.jpg";
import ba23 from "./photos/b24.jpg";
import ba24 from "./photos/b23.jpg";
import ba25 from "./photos/b25.jpg";
import ba26 from "./photos/b26.jpg";
import b43 from "./photos/b43.mp4";
import Exotic from "./photos/Exotic.png";
import b44 from "./photos/b44.mp4";
import bvideo from "./photos/b2video.mp4";
import b45 from "./photos/b46.mp4";
import b47 from "./photos/b47.mp4";
import video1 from "./photos/video8.mp4";
import video2 from "./photos/video9.mp4";
import video33 from "./photos/bird44.mp4"
import bb34 from "./photos/bb34.mp4"
const images = [

  { type: "video", src: video33, alt: "In Cognita" }, 
  { type: "video", src: bvideo, alt: "In Cognita" }, 
  { type: "video", src: bb34, alt: "In Cognita" }, 

  { type: "video", src: video1, alt: "In Cognita" }, 
  { type: "video", src: video2, alt: "In Cognita" }, 

  { type: "image", src: ba25, alt: "In Cognita" },
  { type: "image", src: ba26, alt: "In Cognita" },
  { type: "image", src: Exotic, alt: "In Cognita" },
  { type: "image", src: ba13, alt: "In Cognita" },
  { type: "image", src: ba15, alt: "Spellverse" },
  { type: "image", src: ba17, alt: "In Cognita" },
  { type: "image", src: ba20, alt: "In Cognita" },
  { type: "image", src: ba21, alt: "In Cognita" },
  { type: "image", src: ba23, alt: "Fourth Image" },
  { type: "video", src: b44, alt: "In Cognita" }, 
  { type: "video", src: b47, alt: "In Cognita" }, 
  { type: "video", src: b43, alt: "In Cognita" }, 
  { type: "video", src: b45, alt: "In Cognita" }, 

];

export default function ImageCarousel() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-[lato] font-bold text-center mb-6">
        Some Success Stories!
      </h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="relative min-w-[300px] md:min-w-[400px] rounded-2xl overflow-hidden shadow-md transition-all duration-500 snap-center"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-full object-cover rounded-2xl"
                controls
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}