import { useAuth } from "@clerk/clerk-react";
import { useContext, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { AppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const blankPost = {
  title: "",
  author: "",
  date: new Date().toISOString().slice(0, 10),
  tags: [],
  excerpt: "",
  content: "",
  file: null,
  is_project: false,
};

const initialPostState = {
  title: "",
  author: "",
  date: "",
  tags: [],
  excerpt: "",
  content: "",
  is_project: false,
  file: null,
};
function PostsManager() {
  const { getToken } = useAuth();
  const { posts, setPosts } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState(blankPost);
  const API_URL = import.meta.env.VITE_API_URL;
  const { toast } = useToast();

  //const clearForm = () => {
 //   setNewPost({ ...blankPost, date: new Date().toISOString().slice(0, 10) });
//  };

  // Save post
 const savePost = async () => {
  try {
    setLoading(true);
    const token = await getToken();
    if (!token) {
      throw new Error("No token");
    }

    const post = newPost;
    const formData = new FormData();

    formData.append("title", post.title);
    formData.append("author", post.author);
    formData.append("post_date", post.date);
    formData.append("tags", JSON.stringify(post.tags));
    formData.append("excerpt", post.excerpt);
    formData.append("content", post.content);
    formData.append("is_project", post.is_project);
    
    if (post.file) {
      formData.append("image", post.file);
    }

    const res = await axios.post(`${API_URL}/blogs/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}` // ✅ Ensure token is sent
      },
    });

    const savedPost = res.data;
    setPosts([...posts, savedPost]);

    // ✅ Clear the form fields
    setNewPost({
      title: "",
      author: "",
      date: "",
      tags: [],
      excerpt: "",
      content: "",
      is_project: false,
      file: null
    });
        toast({
      title: "Blog added successfully 🎉",
      description: `Your blog  was added.`,
    });
  } catch (err) {
    console.error(err);
     toast({
      title: "Error saving post ❌",
      description: err.message || "Something went wrong",
      variant: "destructive",
    });
  } finally {
    setLoading(false);
  }
};


const clearForm = () => {
  setNewPost(initialPostState);
  document.getElementById("fileInput").value = ""; // If using a file input
};
  // Update post
 const updatePost = async () => {
  try {
    setLoading(true);
    const post = editingPost;
    const formData = new FormData();

    formData.append("title", post.title);
    formData.append("author", post.author);
    formData.append("post_date", post.date);
    formData.append("tags", JSON.stringify(post.tags));
    formData.append("excerpt", post.excerpt);
    formData.append("content", post.content);
    formData.append("isproject", post.is_project);

    if (post.file) {
      formData.append("image", post.file);
    }

    const blogId = post.id;
    const res = await axios.patch(`${API_URL}/blogs/${blogId}`, formData);

    const updatedPost = res.data;
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));

    toast({
      title: "✅ Blog updated successfully!",
      description: `Your blog "${updatedPost.title}" was updated.`,
    });

    setEditingPost(null);
  } catch (err) {
    console.error(err);
    toast({
      title: "❌ Error updating blog",
      description: `Something went wrong while updating.`,
    });
  } finally {
    setLoading(false);
  }
};


  // Delete post
  const deletePost = async (blogId) => {
    try {
     
      await axios.delete(`${API_URL}/blogs/${blogId}`);

      
         toast({
      title: "Blog deleted successfully 🎉",
      description: `Your blog  was added.`,
    });
    } catch (err) {
      
         toast({
      title: "Failed to delete the blog 🎉",
      description: `error deleting.`,
    });
    }
  };

  return (
    <div className="space-y-10">
      {/* Form */}
      <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-800">
        <h2 className="mb-4 text-xl font-bold">
          {editingPost ? "Edit blog" : "Create New blog"}
        </h2>

        {/* Title */}
        <input
          className="mb-4 w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          placeholder="Post Title"
          value={editingPost ? editingPost.title : newPost.title}
          onChange={(e) =>
            editingPost
              ? setEditingPost({ ...editingPost, title: e.target.value })
              : setNewPost({ ...newPost, title: e.target.value })
          }
        />

        {/* Author */}
        <input
          className="mb-4 w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          placeholder="Author"
          value={editingPost ? editingPost.author : newPost.author}
          onChange={(e) =>
            editingPost
              ? setEditingPost({ ...editingPost, author: e.target.value })
              : setNewPost({ ...newPost, author: e.target.value })
          }
        />

        {/* Date */}
        <input
          type="date"
          className="mb-4 w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          value={editingPost ? editingPost.date : newPost.date}
          onChange={(e) =>
            editingPost
              ? setEditingPost({ ...editingPost, date: e.target.value })
              : setNewPost({ ...newPost, date: e.target.value })
          }
        />

        {/* Tags */}
        <input
          className="mb-4 w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          placeholder="Tags (comma-separated)"
          value={
            editingPost
              ? editingPost.tags.join(", ")
              : newPost.tags.join(", ")
          }
          onChange={(e) => {
            const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
            editingPost
              ? setEditingPost({ ...editingPost, tags: tagsArray })
              : setNewPost({ ...newPost, tags: tagsArray });
          }}
        />

        {/* Excerpt */}
        <textarea
          className="mb-4 w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          placeholder="Short Excerpt"
          value={editingPost ? editingPost.excerpt : newPost.excerpt}
          onChange={(e) =>
            editingPost
              ? setEditingPost({ ...editingPost, excerpt: e.target.value })
              : setNewPost({ ...newPost, excerpt: e.target.value })
          }
        />

        {/* Is Project */}
        <label className="mb-4 flex items-center space-x-2">
          <input
            type="checkbox"
            checked={
              editingPost ? editingPost.is_project : newPost.is_project
            }
            onChange={(e) =>
              editingPost
                ? setEditingPost({
                    ...editingPost,
                    is_project: e.target.checked,
                  })
                : setNewPost({ ...newPost, is_project: e.target.checked })
            }
          />
          <span className="text-gray-700 dark:text-white">
            Is this a project?
          </span>
        </label>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          className="mb-4 w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          onChange={(e) => {
            const file = e.target.files[0];
            editingPost
              ? setEditingPost({ ...editingPost, file })
              : setNewPost({ ...newPost, file });
          }}
        />

        {/* Content */}
        <ReactQuill
          theme="snow"
          value={editingPost ? editingPost.content : newPost.content}
          onChange={(val) =>
            editingPost
              ? setEditingPost({ ...editingPost, content: val })
              : setNewPost({ ...newPost, content: val })
          }
        />

        {/* Buttons */}
        <div className="mt-4">
          <Button
            variant="outline"
            className="rounded bg-green-700 px-6 py-2 text-white hover:bg-green-600"
            onClick={editingPost ? updatePost : savePost}
          >
            {editingPost ? "Update Post" : "Save Post"}
          </Button>
          {editingPost && (
            <button
              className="ml-4 rounded bg-gray-500 px-6 py-2 text-white hover:bg-gray-400"
              onClick={() => setEditingPost(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Posts Table */}
      <div className="overflow-x-auto rounded-lg bg-white p-6 shadow dark:bg-slate-800">
        <h2 className="mb-4 text-xl font-bold">Existing Posts</h2>
        <table className="w-full min-w-[600px] text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Date</th>
              <th className="p-3">Project</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-green-50 dark:hover:bg-slate-700"
              >
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">{p.date}</td>
                <td className="p-3">
                  {p.is_project ? "✅ Yes" : "❌ No"}
                </td>
                <td className="p-3 text-right space-x-2">
                  <button
                    onClick={() => setEditingPost(p)}
                    className="rounded bg-blue-600 p-2 text-white hover:bg-blue-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deletePost(p.id)}
                    className="rounded bg-red-600 p-2 text-white hover:bg-red-500"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default PostsManager;
