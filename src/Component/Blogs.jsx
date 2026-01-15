// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import blogData from "./blogData";
// import BlogForm from "./BlogForm";
// import { supabase } from "../lib/supabase";

// export default function Blogs() {
//   const [showForm, setShowForm] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data }) => {
//       setUser(data.user);
//     });
//   }, []);

//   const isAdmin = user?.email === "admin@gmail.com";

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     const { data, error } = await supabase
//       .from("blogs")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (!error) {
//       setBlogs(data || []);
//     } else {
//       setError(error);
//     }
//   };

//   console.log("all blog", blogs);
//   console.log("error", error);

//   const handleEdit = (blog) => {
//     setSelectedBlog(blog);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this blog?")) {
//       // 🔥 API call will go here
//       await supabase.from("blogs").delete().eq("id", id);
//       fetchBlogs();
//       console.log("Delete blog:", id);
//     }
//   };

//   return (
//     <div className="relative">
//       <section className="py-20 bg-gradient-to-b from-white to-blue-50 font-[lato]">
//         <div className="flex items-center justify-between max-w-5xl mx-auto mb-12">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl font-bold text-gray-900"
//           >
//             Latest Blogs & Articles
//           </motion.h2>
//           {isAdmin && (
//             <button
//               onClick={() => {
//                 setSelectedBlog(null);
//                 setShowForm(true);
//               }}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//               + Add Blog
//             </button>
//           )}
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog.id || index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
//             >
//               {/* Action Icons */}
//               {isAdmin && (
//                 <div className="absolute top-3 right-3 flex gap-2 z-10">
//                   <button
//                     onClick={() => handleEdit(blog)}
//                     className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//                   >
//                     <FiEdit className="text-blue-600" />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(blog.id)}
//                     className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//                   >
//                     <FiTrash2 className="text-red-600" />
//                   </button>
//                 </div>
//               )}

//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={blog?.image_url}
//                   className="w-full h-full object-cover"
//                   alt={blog?.title}
//                 />
//               </div>

//               <div className="p-6">
//                 <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
//                   {blog.tag}
//                 </span>

//                 <h3 className="mt-3 text-xl font-semibold text-gray-900">
//                   {blog.title}
//                 </h3>

//                 <p className="mt-2 text-gray-600 text-sm">{blog.desc}</p>

//                 <Link
//                   to={`/blogs/${blog.id}`}
//                   className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {showForm && (
//         <BlogForm
//           editData={selectedBlog}
//           fetchBlogs={fetchBlogs}
//           onClose={() => setShowForm(false)}
//         />
//       )}
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import BlogForm from "./BlogForm";
import { supabase } from "../lib/supabase";

export default function Blogs() {
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const isAdmin = user?.email === "admin@gmail.com";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    setBlogs(data || []);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this blog permanently?")) {
      await supabase.from("blogs").delete().eq("id", id);
      fetchBlogs();
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Insights & Articles
          </motion.h2>

          {isAdmin && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedBlog(null);
                setShowForm(true);
              }}
              className="mt-6 md:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
            >
              + Publish Blog
            </motion.button>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Admin Actions */}
              {isAdmin && (
                <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  >
                    <FiEdit className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  >
                    <FiTrash2 className="text-red-600" />
                  </button>
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[16/10] bg-gray-100 flex items-center justify-center overflow-hidden">
  <img
    src={blog.image_url}
    alt={blog.title}
    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
  />
</div>

              {/* Content */}
              <div className="p-7">
                <span className="inline-block text-xs uppercase tracking-widest bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {blog.tag}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {blog.desc}
                </p>

                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center gap-2 mt-6 font-semibold text-blue-600 hover:text-indigo-600 transition"
                >
                  Read Article
                  <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Blog Form Modal */}
      {showForm && (
        <BlogForm
          editData={selectedBlog}
          fetchBlogs={fetchBlogs}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}