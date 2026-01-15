

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { collection, addDoc } from 'firebase/firestore';
// import { useFeedback } from '../context/FeedbackContext';
// import db from "../firebase";

// export default function Contact() {
//   const [result, setResult] = useState("");
//   const [rating, setRating] = useState(0);
//   const { updateFeedback } = useFeedback();

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");

//     const formData = new FormData(event.target);
//     formData.append("access_key", "2b224ec4-521a-4626-a94b-7bfa416c168a");
//     formData.append("rating", rating);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     setResult(data.success ? "✅ Query submitted successfully!" : `❌ ${data.message}`);
//     event.target.reset();
//     setRating(0);
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-tr from-[#dbeafe] via-[#f0fdf4] to-[#f0f9ff] flex items-center justify-center px-4 md:px-10 py-24 overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="w-full max-w-5xl rounded-[2rem] bg-white/70 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-white/20 px-12 py-16 relative z-10"
//       >
//         <div className="text-center mb-12">
//           <motion.h2
//             className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             Talk to a <span className="text-indigo-600">Vet</span>
//           </motion.h2>
//           <p className="mt-4 text-lg text-gray-600">
//             24/7 expert support for your furry, feathery, or scaly friends.
//           </p>
//         </div>

//         <form onSubmit={onSubmit} className="space-y-8">
//           {[
//             { label: "Full Name", required: true },
//             { label: "Email", required: true },
//             { label: "Phone", required: true },
//             { label: "Facebook ID", required: false },
//             { label: "Instagram ID", required: false },
//             { label: "State", required: true },
//             { label: "Country", required: true },
//             { label: "Pet Name", required: false }
//           ].map((field, i) => (
//             <div key={i}>
//               <label className="block text-gray-800 font-semibold mb-1">{field.label}</label>
//               <input
//                 type="text"
//                 name={field.label.replace(" ", "_").toLowerCase()}
//                 required={field.required}
//                 className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/90 backdrop-blur-lg shadow-sm transition-all duration-300"
//               />
//             </div>
//           ))}

//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Pet Category</label>
//             <select
//               name="Pet_category"
//               required
//               className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white/90 shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
//             >
//               {["Dog", "Cat", "Bird", "Reptile", "Fish", "Other"].map((pet) => (
//                 <option key={pet}>{pet}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Your Query</label>
//             <textarea
//               name="message"
//               rows="4"
//               required
//               className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white/90 shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
//               placeholder="Describe your pet's issue..."
//             />
//           </div>

//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Preferred Contact Method</label>
//             <select
//               name="How do you wish to be contacted"
//               required
//               className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white/90 shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
//             >
//               {["-- Select an option--", "Instagram", "Facebook", "WhatsApp"].map((option) => (
//                 <option key={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             className="relative w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-4 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300 hover:from-indigo-700 hover:to-violet-700"
//           >
//             <span className="relative z-10">Submit Query</span>
//             <span className="absolute inset-0 rounded-xl bg-white opacity-10 blur-md"></span>
//           </motion.button>

//           <div className="flex items-center my-6">
//             <div className="flex-grow h-px bg-gray-300"></div>
//             <span className="mx-4 text-sm text-gray-500 uppercase font-semibold tracking-wider">or</span>
//             <div className="flex-grow h-px bg-gray-300"></div>
//           </div>

//           <motion.a
//             href="/Bookconsultation"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.96 }}
//             className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
//           >
//             Book Consultation →
//           </motion.a>
//         </form>

//         {result && (
//           <p className="mt-6 text-center text-green-600 font-medium text-sm">{result}</p>
//         )}
//       </motion.div>

//       {/* Background blur & glow effect */}
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#a5b4fc33_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0" />
//     </div>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Globe,
  Dog,
  ChevronRight,
  FileText,
} from "lucide-react";

export default function ContactCorporate() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2b224ec4-521a-4626-a94b-7bfa416c168a");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.success ? "Submitted Successfully!" : "Error Occurred");
    event.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] px-6 py-20 flex justify-center relative">

      {/* Floating Glass Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-col w-72 mr-14 p-10 bg-white/50 backdrop-blur-xl
                   border border-gray-200 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
      >
        <h3 className="text-3xl font-bold text-[#1a1f36] mb-8">
          Contact a Veterinarian
        </h3>

        <div className="space-y-6">
          <StepIndicator step={step} number={1} label="Personal Details" />
          <StepIndicator step={step} number={2} label="Pet Information" />
          <StepIndicator step={step} number={3} label="Your Query" />
        </div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 80, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl bg-white rounded-3xl p-12 border border-gray-200 
                   shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
      >
        {/* Vertical Heading for Mobile */}
        <h2 className="lg:hidden text-4xl font-extrabold text-[#1a1f36] mb-10 text-center">
          Contact a Vet
        </h2>

        {/* Multi-Step Form */}
        <form onSubmit={onSubmit} className="space-y-10">

          {/* ---------------- STEP 1 ---------------- */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Section title="Personal Information" />

              <div className="grid md:grid-cols-2 gap-8">
                <Field icon={<User size={18} />} label="Full Name" required />
                <Field icon={<Mail size={18} />} label="Email" required />
                <Field icon={<Phone size={18} />} label="Phone" required />
                <Field icon={<Globe size={18} />} label="Country" required />
              </div>

              <div className="flex justify-end mt-6">
                <NextBtn action={nextStep} />
              </div>
            </motion.div>
          )}

          {/* ---------------- STEP 2 ---------------- */}
          {step === 2 && (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Section title="Personal & Pet Details" />



    {/* CONTACT PREFERENCE */}
{/* CONTACT PREFERENCE */}
<div className="mt-10">
  <h3 className="text-lg font-semibold text-gray-800">
    How would you like to be contacted?
  </h3>
  <p className="text-sm text-gray-500 mt-1">
    Select a platform and provide the relevant contact detail.
  </p>

  <div className="grid md:grid-cols-2 gap-8 mt-6">
    {/* PLATFORM DROPDOWN */}
    <Select
      label="Preferred Platform"
      options={["WhatsApp", "Facebook", "Instagram"]}
      required
    />

    {/* PLATFORM ID / NUMBER */}
    <Field
      label="WhatsApp Number / Social ID"
      placeholder="e.g. +91 9XXXXXXXXX or username"
    />
  </div>
</div>

    {/* PET DETAILS */}
    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <Field icon={<Dog size={18} />} label="Pet Name" />
      <Select
        label="Pet Category"
        options={["Dog", "Cat", "Bird", "Reptile", "Fish", "Other"]}
        required
      />
    </div>

    {/* ACTION BUTTONS */}
    <div className="flex justify-between mt-8">
      <BackBtn action={prevStep} />
      <NextBtn action={nextStep} />
    </div>
  </motion.div>
)}

          {/* ---------------- STEP 3 ---------------- */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Section title="Describe Your Query" />

              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50
                text-gray-700 focus:ring-2 focus:ring-black/40"
                placeholder="Tell us about the issue..."
              ></textarea>

              <div className="flex justify-between mt-6">
                <BackBtn action={prevStep} />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#1a1f36] text-white rounded-xl font-semibold shadow-md"
                >
                  Submit
                </motion.button>
              </div>
            </motion.div>
          )}
        </form>

        {result && (
          <p className="mt-8 text-center text-gray-600 font-medium">{result}</p>
        )}
      </motion.div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title }) {
  return (
    <div className="border-l-4 border-[#1a1f36] pl-4 mb-10">
      <h3 className="text-2xl font-bold text-[#1a1f36]">{title}</h3>
    </div>
  );
}

function Field({ icon, label, required }) {
  return (
    <div>
      <label className="block text-[#1a1f36] mb-2 font-medium">{label}</label>
      <div className="flex items-center gap-3 px-4 py-4 w-full bg-gray-50 border border-gray-300 rounded-xl">
        {icon}
        <input
          type="text"
          name={label.replace(/ /g, "_").toLowerCase()}
          required={required}
          placeholder={`Enter ${label}`}
          className="bg-transparent w-full outline-none text-gray-700"
        />
      </div>
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-[#1a1f36] mb-2 font-medium">{label}</label>
      <select className="w-full px-4 py-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-700">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function StepIndicator({ step, number, label }) {
  const active = step === number;
  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold 
        ${active ? "bg-[#1a1f36] text-white" : "bg-gray-200 text-gray-500"}`}
      >
        {number}
      </div>
      <p className={`font-medium ${active ? "text-[#1a1f36]" : "text-gray-500"}`}>
        {label}
      </p>
    </div>
  );
}

function NextBtn({ action }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={action}
      type="button"
      className="px-7 py-3 bg-[#1a1f36] text-white font-semibold rounded-xl flex items-center gap-2"
    >
      Next <ChevronRight size={18} />
    </motion.button>
  );
}

function BackBtn({ action }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={action}
      type="button"
      className="px-7 py-3 bg-gray-200 text-[#1a1f36] font-semibold rounded-xl"
    >
      Back
    </motion.button>
  );
}