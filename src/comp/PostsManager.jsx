import { useState } from "react";
import {
  
  FaTrash,
  FaEdit,

} from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function PostsManager({ posts, setPosts, newPost, setNewPost, editingPost, setEditingPost, savePost, updatePost, deletePost }) {
    return (
      <div className="space-y-10">
        {/* New / Edit Form */}
       {/* New / Edit Form */}
<div className="rounded-lg bg-white p-6 shadow dark:bg-slate-800">
  <h2 className="mb-4 text-xl font-bold">{editingPost ? "Edit blog" : "Create New blog"}</h2>

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
    value={editingPost ? editingPost.tags.join(', ') : newPost.tags.join(', ')}
    onChange={(e) => {
      const tagsArray = e.target.value.split(',').map(tag => tag.trim())
      editingPost
        ? setEditingPost({ ...editingPost, tags: tagsArray })
        : setNewPost({ ...newPost, tags: tagsArray })
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

  {/* Image Upload */}
  <input
    type="file"
    accept="image/*"
    className="mb-4 w-full rounded border border-gray-300 p-3 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
    onChange={(e) => {
      const file = e.target.files[0]
      editingPost
        ? setEditingPost({ ...editingPost, file })
        : setNewPost({ ...newPost, file })
    }}
  />

  {/* Content (ReactQuill) */}
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
    <button
      className="rounded bg-green-700 px-6 py-2 text-white hover:bg-green-600"
      onClick={editingPost ? updatePost : savePost}
    >
      {editingPost ? "Update Post" : "Save Post"}
    </button>
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
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-b hover:bg-green-50 dark:hover:bg-slate-700">
                  <td className="p-3">{p.id}</td>
                  <td className="p-3">{p.title}</td>
                  <td className="p-3">{p.date}</td>
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

  export default PostsManager