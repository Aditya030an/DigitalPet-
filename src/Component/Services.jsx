


import React, { useState } from "react";
import {
  PawPrint,
  Bird,
  Turtle,
  Fish,
  Rabbit,
  Bug,
} from "lucide-react";

/* ====== IMAGES ====== */
import reptile from "./photos/turtle.jpg";
import mammals from "./photos/rabbit.jpg";
import aqua from "./photos/fish1.jpg";
import dog from "./photos/dog.jpg";
import tiny from "./photos/tiny.jpg";
import bird from "./photos/bird1.jpg";
import visit from "./photos/visit.jpeg";
/* INSTITUTIONAL IMAGES (FIXED) */
import zoo from "./photos/zoo.jpeg";
import wildlife from "./photos/wildlife.jpeg";
// import farm from "./photos/farm.jpg";

/* ====== DATA ====== */
const categories = [
  {
    icon: <PawPrint size={28} />,
    title: "Companion Animal",
    subtitle: "Guidance for Dogs & Cats",
    img: dog,
    desc:
      "Routine checkups, chronic care, behavior issues, nutrition, senior wellness, parasite control & general health.",
  },
  {
    icon: <Turtle size={28} />,
    title: "Reptile & Amphibian Arena",
    subtitle: "Cold-Blooded Pet Expertise",
    img: reptile,
    desc:
      "Humidity control, UVB setup, temperature gradients, metabolic disorders, enclosure design & disease care.",
  },
  {
    icon: <Bird size={28} />,
    title: "Avian Haven",
    subtitle: "Bird Wellness & Behaviour",
    img: bird,
    desc:
      "Feather plucking, respiratory issues, diet optimization, behavior correction & habitat setup.",
  },
  {
    icon: <Rabbit size={28} />,
    title: "Small Mammal Domain",
    subtitle: "Rodents, Rabbits & Exotics",
    img: mammals,
    desc:
      "Dental health, nutrition, enrichment, housing, grooming, and disease management for small mammals.",
  },
  {
    icon: <Fish size={28} />,
    title: "Aquatic Care",
    subtitle: "Freshwater & Marine Support",
    img: aqua,
    desc:
      "Tank cycling, water chemistry, fish diseases, stress reduction, filtration & aquatic nutrition.",
  },
  {
    icon: <Bug size={28} />,
    title: "Tiny Titans",
    subtitle: "Invertebrate Wellness",
    img: tiny,
    desc:
      "Molting issues, enclosure humidity, microhabitats, nutrition & exotic invertebrate care.",
  },

  /* ====== INSTITUTIONAL ====== */

  {
    icon: <PawPrint size={28} />,
    title: "Zoo, Pet Sanctuary & Aviary Consults",
    subtitle: "Institutional Veterinary Guidance",
    img: zoo,
    desc:
      "Specialized veterinary support for zoos, sanctuaries, breeding centers and aviaries including enclosure design, nutrition, preventive care, disease management & long-term welfare planning.",
  },
  {
    icon: <PawPrint size={28} />,
    title: "NGO & Wildlife Rescue Consults",
    subtitle: "Rescue, Rehabilitation & Release",
    img: wildlife,
    desc:
      "Clinical guidance for NGOs and wildlife rescue teams handling injured, orphaned or displaced animals. Includes triage, treatment planning, rehabilitation protocols and release assessments. (Offered free of charge).",
  },
  {
    icon: <PawPrint size={28} />,
    title: "On-Site Visits: Sanctuary, Aviary or Farm",
    subtitle: "Hands-On Expert Evaluations",
    img: visit,
    desc:
      "Scheduled on-site assessments of animal health, enclosures, nutrition and care practices. Visits available with prior appointment.",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative w-full py-28 px-8 md:px-20 bg-gradient-to-br from-[#eef9f2] via-[#f5f8ff] to-[#eef8ff]">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-bold text-[#093b29] mb-4">
          Our Expertise
        </h2>
        <div className="w-24 mx-auto h-[3px] bg-[#4c9e6f] rounded-full"></div>
        <p className="text-gray-600 mt-6 text-lg">
          Premium veterinary consultation categories tailored for every species
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className="
              group relative bg-white/40 backdrop-blur-lg 
              border border-white/50 rounded-2xl shadow-md
              overflow-hidden transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.20)]
            "
          >
            {/* IMAGE (NO CUT) */}
            <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className={`
                  max-h-full max-w-full object-contain
                  transition-transform duration-700
                  ${active === index ? "scale-105" : "scale-100"}
                `}
              />
            </div>

            {/* Icon */}
            <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-xl 
              w-12 h-12 flex items-center justify-center rounded-xl 
              shadow-md text-[#063726]">
              {item.icon}
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-bold text-[#063726]">
                {item.title}
              </h3>
              <p className="text-sm uppercase tracking-wide text-[#3f2fb8] mt-1 font-semibold">
                {item.subtitle}
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-5 text-sm font-semibold text-[#3f2fb8] hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}