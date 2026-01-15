// import React, { useState, useEffect } from "react";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaBars,
//   FaTimes,
//   FaChevronDown,
//   FaUser,
//   FaSignInAlt,
//   FaUserPlus,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "./photos/digitallogo.png";
// import { supabase } from "../lib/supabase";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data }) => {
//       setUser(data.user);
//     });

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null);
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, []);

//   // console.log("user", user);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/login");
//   };

//   // Close the services dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const servicesMenu = document.getElementById("services-dropdown");
//       if (servicesMenu && !servicesMenu.contains(event.target)) {
//         setServicesOpen(false); // Close the dropdown if clicked outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="flex items-center justify-between px-4 py-2 font-[lato] bg-white shadow-lg relative">
//       {/* Logo Section */}
//       <Link to="/" className="flex items-center">
//         <img
//           src={logo}
//           alt="Logo"
//           className="h-16 w-auto cursor-pointer transition-all duration-300 transform hover:scale-110"
//         />
//       </Link>

//       {/* Hamburger Menu for Mobile */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden text-black text-2xl focus:outline-none z-50"
//       >
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Navigation Links & Contact Section */}
//       <div
//         className={`md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 flex flex-col md:flex-row transition-all duration-300 ${
//           isOpen ? "flex" : "hidden"
//         } z-40`}
//       >
//         <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
//           <Link
//             to="/"
//             className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
//           >
//             Home
//           </Link>

//           {/* Services Dropdown with Premium Design */}
//           <div className="relative group">
//             {/* Parent Element (Trigger) */}
//             <button
//               className="flex items-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
//               onClick={() => setServicesOpen(!servicesOpen)}
//             >
//               Services <FaChevronDown className="ml-1 text-sm" />
//             </button>

//             {/* Dropdown Menu */}
//             <div
//               id="services-dropdown"
//               className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 transform scale-95 opacity-0 pointer-events-none 
//                 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
//                 ${
//                   servicesOpen
//                     ? "opacity-100 scale-100 pointer-events-auto"
//                     : ""
//                 }`}
//             >
//               <ul className="py-2">
//                 {[
//                   "First aid and emergency advice",
//                   "Disease diagnosis and treatment",
//                   "Parasite control",
//                   "Nutrition and diet guidance",
//                   "Enclosure and husbandry setup",
//                   "Breeding and neonatal care",
//                   "Second opinion - expert's review",
//                 ].map((service, index, array) => (
//                   <li
//                     key={index}
//                     className={`px-5 py-3 text-gray-700 transition-all duration-300 ease-in-out cursor-pointer 
//                       ${index === 0 ? "rounded-t-lg" : ""} 
//                       ${
//                         index === array.length - 1
//                           ? "rounded-b-lg"
//                           : "border-b border-gray-200"
//                       } `}
//                   >
//                     {service}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <Link
//             to="/blogs"
//             className="text-gray-700 hover:text-blue-600 transition duration-300"
//           >
//             Blogs
//           </Link>

//           {/* Auth Buttons (Mobile) */}
//           {/* Desktop Auth */}
//           <div className="hidden md:flex items-center gap-4">
//             {!user ? (
//               <>
//                 <Link
//                   to="/login"
//                   className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
//                 >
//                   <FaSignInAlt /> Login
//                 </Link>

//                 <Link
//                   to="/signup"
//                   className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
//                 >
//                   <FaUserPlus /> Signup
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 text-red-600 hover:text-red-700"
//               >
//                 <FaSignOutAlt /> Logout
//               </button>
//             )}
//           </div>

//           <Link
//             to="/Rateus"
//             className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
//           >
//             Rate us
//           </Link>

//           {/* Contact Info */}
//           <a
//             href="tel:+919424094362"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300"
//           >
//             <FaPhoneAlt className="text-xl" />
//             <span className="text-lg font-semibold">+91 9424094362</span>
//           </a>
//           <a
//             href="mailto:Digitalpetclinic@gmail.com"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300"
//           >
//             <FaEnvelope className="text-xl" />
//             <span className="text-lg font-semibold">
//               Digitalpetclinic@gmail.com
//             </span>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "./photos/digitallogo.png";
import { supabase } from "../lib/supabase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const isAdmin = user?.email === "admin@gmail.com";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("services-dropdown");
      if (menu && !menu.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between font-[lato]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Digital Pet Clinic"
            className="h-14 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="nav-link" to="/">
            Home
          </Link>

          {/* Services */}
          <div className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="nav-link flex items-center gap-1"
            >
              Services <FaChevronDown className="text-xs" />
            </button>

            <div
              id="services-dropdown"
              className={`absolute left-0 mt-3 w-72 rounded-xl bg-white shadow-xl border transition-all duration-300
                ${
                  servicesOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <ul className="py-2">
                {[
                  "Emergency Advice",
                  "Disease Diagnosis",
                  "Parasite Control",
                  "Nutrition Guidance",
                  "Breeding Care",
                  "Expert Second Opinion",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="px-6 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link className="nav-link" to="/blogs">
            Blogs
          </Link>

          <Link className="nav-link" to="/Rateus">
            Rate Us
          </Link>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="tel:+919424094362" className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9424094362
            </a>
            <a
              href="mailto:Digitalpetclinic@gmail.com"
              className="flex items-center gap-2"
            >
              <FaEnvelope /> Email
            </a>
          </div>

          {/* Admin Access */}
          {!user ? (
            <Link
              to="/login"
              title="Admin Login"
              className="p-2 rounded-full border hover:bg-gray-100 transition"
            >
              <FaUserShield />
            </Link>
          ) : (
            <div className="relative group">
              <button className="p-2 rounded-full border bg-gray-50">
                <FaUserShield className="text-blue-600" />
              </button>

              <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border opacity-0 group-hover:opacity-100 transition">
                <div className="px-4 py-3 text-sm text-gray-700 border-b">
                  {user.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 flex items-center gap-2 text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;