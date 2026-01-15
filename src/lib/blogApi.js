import { supabase } from "./supabase";

/* Upload image and get public URL */
export const uploadImage = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("blog-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
};

/* Fetch blogs */
export const getBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

/* Add blog */
export const addBlog = async (blog, imageFile) => {
  const imageUrl = await uploadImage(imageFile);

  const { error } = await supabase.from("blogs").insert([
    {
      ...blog,
      image_url: imageUrl,
    },
  ]);

  if (error) throw error;
};

/* Update blog */
export const updateBlog = async (id, blog) => {
  const { error } = await supabase
    .from("blogs")
    .update(blog)
    .eq("id", id);

  if (error) throw error;
};

/* Delete blog */
export const deleteBlog = async (id) => {
  const { error } = await supabase
    .from("blogs")
    .delete()
    .eq("id", id);

  if (error) throw error;
};
