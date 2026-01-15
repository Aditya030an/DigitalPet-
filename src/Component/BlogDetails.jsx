import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "./blogData.js";
import { supabase } from "../lib/supabase.js";

export default function BlogDetails() {
  const { id } = useParams();
  // const blogs = blogData.find((b) => b.id === id);

  const [blog , setBlog] = useState(null);

  useEffect(()=>{
    fetchBlog();
  } , []);

  const fetchBlog = async ()=>{
    const {data , error} =await supabase.from("blogs").select("*").eq("id" , id).single();
    if(!error) setBlog(data);
  }

  if (!blog) return <h2 className="text-center py-20">Blog not found</h2>;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto font-[lato]">
      <Link
        to="/blogs"
        className="text-blue-600 font-semibold hover:underline"
      >
        ← Back to Blogs
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-gray-900 mt-6"
      >
        {blog?.title}
      </motion.h1>

      <p className="mt-2 text-blue-600 font-medium">{blog?.tag}</p>

      <img
        src={blog?.image_url}
        className="w-full rounded-2xl shadow-lg my-8"
        alt={blog?.title}
      />

      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
        {blog?.content}
      </p>
    </section>
  );
}