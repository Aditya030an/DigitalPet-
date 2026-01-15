import { useState } from "react";
import { supabase } from "../lib/supabase.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email:email.trim(),
      password:password.trim(),
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>

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
        className="bg-green-600 text-white w-full py-2"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <p className="text-center text-sm">
  Don&apos;t have an account?{" "}
  <Link
    to="/signup"
    className="text-blue-600 font-semibold hover:underline"
  >
    Sign up
  </Link>
</p>

    </form>
  );
}
