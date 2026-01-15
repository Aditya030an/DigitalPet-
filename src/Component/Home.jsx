import { useState } from 'react';
import gc from "./photos/GC.avif"
import Skin from "./photos/Skin .avif"
import digestive from "./photos/DI.avif"
import paws from "./photos/paws.avif"
import dental from "./photos/dental.avif"
import Ears from "./photos/ear.avif"
import eyes from "./photos/eyes.avif"
import vishal from "./photos/vishal1.jpeg"
import vivek from "./photos/dr1.png"
import Contact from "./Contact";
import reptile from "./photos/turtle.jpg"
import mammals from "./photos/rabbit.jpg"
import aqua from "./photos/fish1.jpg"
import dog from "./photos/dog.jpg"
import zoo from "./photos/zoo.jpeg"
import tiny from "./photos/tiny.jpg"
import bird from "./photos/bird1.jpg"
import Testimonial from "./testimonial"
import Landingpage from "./Landingpage"
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import reproduction from "./photos/reproduction.avif"
import nutrition from "./photos/nutrition.avif"
import { motion } from 'framer-motion';
import  Before from "./Before"
import Services1 from "./Services"
const services = [
  { img: gc, label: "General Checkup" },
  { img: Skin, label: "Skin Issues" }, // Fixed filename
  { img: digestive, label: "Digestive Issues" },
  { img: paws, label: "Paws & Limbs" },
  { img: dental, label: "Dental Issues" },
  { img: Ears, label: "Ears Issues" },
  { img: eyes, label: "Eyes Issues" },
  { img: reproduction, label: "Reproduction" },
  { img: nutrition, label: "Nutrition" }
];
import React from "react";
const packages = [
  {
    title: "Companion Animal",
    nights: "Trusted Guide for Dogs & Cats",
    description:
      "From routine checkups to chronic disease management, get expert guidance for dogs and cats, covering nutrition, behavior, parasite control, pup and senior pet wellness, and much more!",
    image: dog, // Store the image path here
  },
  {
    title: "Reptile & Amphibian Arena",
    nights: "Tailored Advice  for Cold-Blooded Companions",
    description:
      "From snakes and lizards to turtles, frogs, and salamanders, proper care is essential for the health of your cold-blooded companions.Get specialized support for enclosure setup, temperature and humidity regulation, metabolic disorders, RIs, and more. Whether you’re a pet owner or wildlife rescuer, reliable veterinary advice is just a call away.",
    image: reptile, // Replace with actual image path
  },
  {
    title: "Avian Haven",
    nights: "Expert Care for Feathered Friends",
    description:
      "Get consultations for feather plucking, respiratory issues, dietary imbalances, enclosure optimization, behavioral concerns, and breeding guidance for all birds big and small. Ensure your bird thrives with expert health and wellness advice.",
    image: bird, // Replace with actual image path
  },
  {
    title: "Small Mammal Domain",
    nights: "Specialized Care for Rabbits, Rodents & Exotic Mammals",
    description:
      "Expert consultations for rabbits, guinea pigs, hamsters, rats, mice, ferrets, sugar gliders, marmosets, pocket monkeys, and other small mammals. We offer guidance on dental care, nutrition, housing, behavioral concerns, disease prevention, and enrichment.",
    image: mammals, // Replace with actual image path
  },
  {
    title: "Aquatic Care",
    nights: "Expert Guidance for Freshwater & Marine Fish",
    description:
      "Keeping fish healthy goes beyond feeding! We assist with water quality management, disease identification (Ich, fin rot, dropsy, etc.), proper tank cycling, nutrition planning, and stress reduction strategies for both freshwater and saltwater species, including betta fish, goldfish, cichlids, koi, and exotic marine species.",
    image: aqua, // Replace with actual image path
  },
  {
    title: "Tiny Titans",
    nights: "Specialized Care for Invertebrates",
    description:
      "From tarantulas and scorpions to hermit crabs, snails, isopods, and mantises, we help ensure proper enclosure conditions, molting success, nutritional support, and species-specific care for your exotic invertebrates.",
    image: tiny, // Replace with actual image path
  },


  
  {
    title: "⁠Zoo, Pet Sanctuary & Aviary Consults ",
    nights: "Specialized veterinary guidance for zoos, Petting zoos, Pet sanctuaries & Aviaries....",
    description:
      "Specialized veterinary guidance for zoos, sanctuaries, breeding centers, and aviaries. We assist with enclosure design, nutrition, preventive healthcare, disease management, and long-term welfare planning across diverse species.",
    image: zoo, // Replace with actual image path
  },
  {
    title: "NGO & Wildlife Rescue Consults",
    nights: "Expert Guidance for Freshwater & Marine Fish",
    description:
      "Clinical support for NGOs and wildlife rescue teams managing injured, orphaned, or displaced animals. We provide triage guidance, treatment planning, rehabilitation protocols, and release assessments.Wildlife rescue and rehabilitation consultations are offered free of charge",
    image: aqua, // Replace with actual image path
  },
  {
    title: "Visits: Pet Sanctuary, Aviary or Farm",
    nights: "ON-SITE EXPERT EVALUATIONS",
    description:
      "Scheduled visits to pet sanctuaries, aviaries and farms for hands-on assessment of animal health, enclosures, nutrition, and care practices.Visits available with prior appointment.",
    image: tiny, // Replace with actual image path
  },


];
function App() {
  return (
    <div>

      <Landingpage></Landingpage>

      {/* 2nd section */}
      {/* <div className="bg-blue-100 text-black font-[lato] py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-black border-l-4 border-green-400 pl-3 mb-4">
            Welcome to Digitalpetclinic.com : A Virtual Veterinary Clinic
          </h3>
          <h1 className="text-4xl md:text-5xl font-[lato] leading-tight">
            Online Veterinary Consultation: Get the best veterinary advice anytime, anywhere
          </h1>
          <p className="mt-6 text-black text-lg  font-[lato] leading-relaxed">
            At Digitalpetclinic.com, we're dedicated to providing top-notch veterinary care for all species,
            from companion animals to exotic pets. Our team of licensed veterinarians and
            specialists have extensive experience in caring for a wide range of animals from fur to
            feathers to fins and scales we’ve got everyone covered.          </p>
          <p className="mt-4 text-black  font-[lato] text-lg leading-relaxed">
            If you're looking for expert veterinary care for your animals, look no further .          </p>
          <div className="mt-8 bg-white/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-[lato] leading-relaxed">
            Our dedicated team of veterinarians is ready to address all of your pet's health concerns. Get professional advice and support for your furry friends, all from the comfort of your own home.
            </p>
            <div className="mt-16 text-center relative px-4 md:px-0">
  <div className="inline-block relative">
    <div className="absolute -inset-1 bg-gradient-to-tr from-green-300 via-blue-200 to-teal-100 rounded-xl blur-lg opacity-60 animate-pulse-slow"></div>
    
    <div className="relative z-10 py-12 px-6 md:px-16 text-center overflow-hidden rounded-2xl bg-gradient-to-br from-white via-blue-50 to-green-50 shadow-2xl">

  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-pink-200 rounded-full blur-3xl opacity-30 animate-float-slow"></div>
    <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-40 animate-float-slow delay-300"></div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-20 animate-float-slow delay-500"></div>
  </div>


  <p className="text-sm uppercase tracking-widest text-green-700 font-semibold mb-2 z-10 relative">
    🐶 Our Growing Pet Family 🐱
  </p>
  <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-green-600 via-lime-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-md relative z-10">
    1500+
  </h2>
  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2 z-10 relative">
    Happy & Satisfied Pet Parents
  </h3>
  <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto z-10 relative leading-relaxed">
    Thank you for making us your trusted choice in pet healthcare. We’re honored to serve every wag, purr, and playful jump.
  </p>
</div>
  </div>
</div>

          </div>
        </div>
      </div> */}




<div className="relative bg-white text-black font-[Lato] overflow-hidden py-28 px-6 md:px-20">
  {/* Blurred Gradient Blobs */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute w-[500px] h-[500px] bg-[#006533] opacity-10 blur-[160px] rounded-full top-[-100px] left-[-100px] animate-float-slow" />
    <div className="absolute w-[400px] h-[400px] bg-[#332A85] opacity-10 blur-[140px] rounded-full bottom-0 right-[-120px] animate-float-slow delay-200" />
    <div className="absolute w-[450px] h-[450px] bg-gradient-to-br from-[#00B879] via-[#006533] to-[#332A85] opacity-10 blur-[120px] rounded-full bottom-[20%] left-[50%] -translate-x-1/2 animate-float-slow delay-500" />
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-md md:text-lg tracking-wider font-semibold text-[#006533] uppercase mb-6">
      A New Era in Veterinary Healthcare 🐾
    </h3>

    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
      Bringing <span className="bg-gradient-to-r from-[#006533] via-[#00B879] to-[#332A85] bg-clip-text text-transparent">Expert Pet Care</span>  
      <br className="hidden md:block" /> Straight to Your Screen
    </h1>

    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
      At <span className="font-semibold text-[#332A85]">DigitalPetClinic.com</span>, we combine compassion with innovation. 
      Our certified veterinarians are available anytime, anywhere — to heal, guide, and support every heartbeat you love.
    </p>

    {/* CTA Button */}
    <div className="mt-10">
      <a
        href="#book-now"
        className="inline-block bg-[#006533] hover:bg-[#004F29] text-white font-semibold py-4 px-10 rounded-full text-lg shadow-xl transition duration-300"
      >
        🩺 Book a Consultation
      </a>
    </div>

    {/* Stat Card */}
    <div className="mt-20 relative mx-auto w-full max-w-3xl px-6">
      <div className="relative rounded-3xl p-10 bg-white/60 backdrop-blur-lg border border-white/30 shadow-2xl overflow-hidden">
        {/* Glowing Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-tr from-[#00B879] via-[#006533] to-[#332A85] opacity-30 blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-glow"></div>
        </div>

        {/* Stat Text */}
        <p className="text-sm uppercase tracking-wider text-[#006533] font-semibold mb-3">
          Trusted by Thousands
        </p>
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-[#006533] via-[#00B879] to-[#332A85] bg-clip-text text-transparent tracking-tight">
          3000+ Pet Parents
        </h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          We've proudly served pets of all kinds — dogs, cats, birds, turtles, and even sugar gliders. 
          Every tail wag and purr fuels our mission to care better, virtually.
        </p>
      </div>
    </div>
  </div>
</div>
















      {/* 3rd section */}
      {/* <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold  font-[lato] text-gray-800">{pkg.title}</h2>
                <p className="text-gray-500 font-[lato] font-medium mt-2">{pkg.nights}</p>
                <p className="text-gray-600 font-[lato] mt-4">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}



<Services1></Services1>







      {/* 4th section */}


      {/* <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold font-[lato] text-gray-900 mb-10"
        >
          Access Our Expert Vets from Anywhere
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-[lato] max-w-6xl mx-auto">
          {[
            {
              img: vivek,
              name: "Dr. Vivek K Maurya",
              specialty: "MVSc (Veterinary Medicine) | 3+ Years",
              qualification: " Companion animal, Avian and Exotic Animal veterinarian ",
              instagram: "https://www.instagram.com/vet_wizard?igsh=ZnJuYXF6cTJtNnF4",
              facebook: "https://www.facebook.com/profile.php?id=61567724497242&mibextid=ZbWKwL",
            },
            {
              img: vishal,  // Directly specify the path here
              name: "Dr. Vishal Patel",
              specialty: " Senior Veterinarian,MVSc (Veterinary Clinical Medicine, Ethics & Jurisprudence) | 7+ Years",
              qualification: "Avian & Exotic Animal Medicine, Rehabilitation Medicine, Kitchen Medicine & Diet Management. ",
              instagram: "https://www.instagram.com/dr_vishal_patel_21?igsh=bjNzbjNtNm9sNmky",
              facebook: "https://www.facebook.com/profile.php?id=61567724497242&mibextid=ZbWKwL",
            },
          ].map((vet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeOut' }}
              className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-blue-400"
              style={{ backdropFilter: "blur(10px)" }} // Glassmorphism effect
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full flex items-center justify-center overflow-hidden shadow-md border-4 border-white"
              >
                <img src={vet.img} alt={vet.name} className="w-full h-full object-cover" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 text-xl font-semibold text-gray-800"
              >
                {vet.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-blue-600 font-medium mt-1"
              >
                {vet.specialty}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-500 text-sm"
              >
                {vet.qualification}
              </motion.p>
              <div className="flex space-x-4 mt-3">
                <motion.a
                  href={vet.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <FaInstagram className="text-lg" />
                </motion.a>
                <motion.a
                  href={vet.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <FaFacebookF className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}




<section className="relative py-24 bg-[#f7faff] overflow-hidden">

{/* Floating Blobs */}
<div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-200/40 blur-[150px] rounded-full"></div>

{/* Section Heading */}
<motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center text-5xl font-[lato] font-black text-gray-900 tracking-tight"
>
  Meet Our Veterinary Experts
</motion.h2>

{/* Subtext */}
<p className="text-center text-gray-500 mt-4 text-lg">
  Highly trained professionals dedicated to world-class pet care.
</p>

{/* Grid */}
<div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

  {[
    {
      img: vivek,
      name: "Dr. Vivek K Maurya",
      specialty: "MVSc (Medicine) | 3+ Years",
      qualification: "Companion animal, Avian & Exotic Animal Veterinarian",
      instagram: "https://www.instagram.com/vet_wizard?igsh=ZnJuYXF6cTJtNnF4",
      facebook: "https://www.facebook.com/profile.php?id=61567724497242&mibextid=ZbWKwL",
    },
    {
      img: vishal,
      name: "Dr. Vishal Patel",
      specialty: "Senior Vet, MVSc (Clinical Medicine) | 7+ Years",
      qualification:
        "Avian & Exotic Medicine, Rehabilitation, Diet & Kitchen Medicine",
      instagram: "https://www.instagram.com/dr_vishal_patel_21?igsh=bjNzbjNtNm9sNmky",
      facebook: "https://www.facebook.com/profile.php?id=61567724497242&mibextid=ZbWKwL",
    },
  ].map((vet, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: i * 0.2 }}
      className="
        group relative bg-white rounded-3xl p-10 shadow-xl
        hover:shadow-2xl transition-all duration-500
        border border-gray-100 hover:-translate-y-2
        overflow-hidden
      "
    >

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-700"></div>

      {/* Vertical Label */}
      <div className="absolute left-0 top-6 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-r-xl tracking-wide shadow-md">
        Senior Vet
      </div>

      {/* Profile Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-36 h-36 rounded-full overflow-hidden shadow-xl mx-auto border-4 border-white"
      >
        <img src={vet.img} className="w-full h-full object-cover" />
      </motion.div>

      {/* Name */}
      <h3 className="text-center mt-6 text-2xl font-bold text-gray-900">
        {vet.name}
      </h3>

      {/* Specialty */}
      <p className="text-center text-blue-600 font-semibold mt-1">
        {vet.specialty}
      </p>

      {/* Qualification */}
      <p className="text-center text-gray-500 mt-3 text-sm tracking-wide">
        {vet.qualification}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        <motion.a
          href={vet.instagram}
          target="_blank"
          whileHover={{ scale: 1.15 }}
          className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          href={vet.facebook}
          target="_blank"
          whileHover={{ scale: 1.15 }}
          className="p-3 bg-blue-600 text-white rounded-full shadow-md"
        >
          <FaFacebookF />
        </motion.a>
      </div>
    </motion.div>
  ))}
</div>
</section>




      {/* contact page */}
      <Contact />
      <Before></Before>

      {/* feedback form */}
      <Testimonial />



      <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
      {/* WhatsApp Button with Wavy Motion */}
      <motion.a
        href="https://wa.me/9424094362"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        animate={{ x: [0, 10, 0, -10, 0], y: [0, -5, 0, 5, 0] }} // Creates a wavy movement
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </motion.a>

      {/* Facebook Button with Wavy Motion */}
      <motion.a
        href="https://www.facebook.com/profile.php?id=61574019002847"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        animate={{ x: [0, -10, 0, 10, 0], y: [0, 5, 0, -5, 0] }} // Opposite wavy movement
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          className="w-12 h-12"
        />
      </motion.a>
    </div>

      
  


      
    </div>
  );
}
export default App;


