import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "./photos/DigitalLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="nav-link" to="/">Home</Link>

          {/* Desktop Services */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Services <FaChevronDown className="text-xs" />
            </button>
            <div className="absolute left-0 mt-3 w-64 bg-white border rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition">
              {[
                "Emergency Advice",
                "Disease Diagnosis",
                "Parasite Control",
                "Nutrition Guidance",
                "Breeding Care",
                "Expert Second Opinion",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-3 text-sm hover:bg-blue-50 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Link className="nav-link" to="/blogs">Blogs</Link>
          <Link className="nav-link" to="/Rateus">Rate Us</Link>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="tel:+919424094362" className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9424094362
            </a>
            <a href="mailto:Digitalpetclinic@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          {!user ? (
            <Link to="/login" className="p-2 border rounded-full">
              <FaUserShield />
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

            {/* Mobile Services */}
            <button
              className="flex items-center justify-between"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services <FaChevronDown />
            </button>

            {mobileServicesOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                {[
                  "Emergency Advice",
                  "Disease Diagnosis",
                  "Parasite Control",
                  "Nutrition Guidance",
                  "Breeding Care",
                  "Expert Second Opinion",
                ].map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            )}

            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <Link to="/Rateus" onClick={() => setMenuOpen(false)}>Rate Us</Link>

            <a href="tel:+919424094362" className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9424094362
            </a>
             <a href="mailto:Digitalpetclinic@gmail.com" className="flex items-center gap-2">
              <FaEnvelope /> Email
            </a>

            {!user ? (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Admin Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="text-red-600">
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
