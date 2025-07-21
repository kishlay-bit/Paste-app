import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { removeFromPaste } from "../redux/PasteSlice";
import { useNavigate } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();
  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-2 py-6 overflow-auto">
      <input
        className="bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 outline-none rounded-lg px-4 py-3 w-full max-w-2xl mt-4 placeholder-gray-400"
        type="search"
        placeholder="Search pastes by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col items-center w-full mt-6">
        {filteredData.map((paste) => (
          <div
            key={paste._id}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-2xl mt-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{paste.title}</h2>
            <p className="text-gray-300 mb-4 whitespace-pre-line break-words">{paste.content}</p>
            <p className="text-xs text-gray-400 mb-4">Created at: {new Date(paste.createdAt).toLocaleString()}</p>
            <div className="flex flex-wrap gap-3 mt-2 border-t border-gray-700 pt-4">
              <button onClick={() => navigate(`/?pasteId=${paste._id}`)} className="bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white px-4 py-2 rounded-lg shadow transition">edit</button>
              <button onClick={() => navigate(`/paste/${paste._id}`)} className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-2 rounded-lg transition">view</button>
              <button onClick={() => handleDelete(paste._id)} className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition">delete</button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Content copied to clipboard!");
                }}
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition"
              >
                copy
              </button>
              <button
                onClick={() => {
                  const shareUrl = `${window.location.origin}/paste/${paste._id}`;
                  navigator.clipboard.writeText(shareUrl);
                  toast.success("Share link copied!");
                }}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition"
              >
                share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paste;
