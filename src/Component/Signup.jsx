import { useState } from "react";
import { supabase } from "../lib/supabase.js";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email:email.trim(),
      password:password.trim(),
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      alert("Signup successful! Please login.");
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto mt-20 space-y-4">
      <h2 className="text-2xl font-bold">Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        required
        className="w-full border p-2"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        className="w-full border p-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        disabled={loading}
        className="bg-blue-600 text-white w-full py-2"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
      <p className="text-center text-sm">
  Already have an account?{" "}
  <Link
    to="/login"
    className="text-green-600 font-semibold hover:underline"
  >
    Login
  </Link>
</p>

    </form>
  );
}
