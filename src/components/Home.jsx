import React, { use, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { removeFromPaste } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { addToPaste, updateToPaste } from '../redux/PasteSlice';
const Home = () => {
    const [title, setTitle] =useState('');
    const[value,setvalue]=useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
            if (pasteId) {
                const existingPaste = allPastes.find(p => p._id === pasteId);
                if (existingPaste) {
                    setTitle(existingPaste.title);
                    setvalue(existingPaste.content);
                }
            }
        }, [pasteId, allPastes]);
    
    function handleCreateOrUpdatePaste() {
        const paste={
            title:title,
            content:value,
            _id:pasteId ||
                Date.now().toString(36),// Generate a random ID if no pasteId
            createdAt: new Date().toISOString() // Add createdAt timestamp
        }
        
        

        if (pasteId) {
            // Update existing paste logic
            dispatch(updateToPaste(paste));
        } else {
            // Create new paste logic
            dispatch(addToPaste(paste));
        }
        setTitle('');
        setvalue('');
        setSearchParams({}); // Clear the search params after creating or updating
    }

    return (
  <div className="flex items-center justify-center min-h-screen min-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-2 py-6 overflow-auto">
    <div className="w-full max-w-2xl bg-gray-800 shadow-2xl rounded-2xl p-8 border border-gray-700">
      <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center tracking-wide">
        {pasteId ? 'Update Paste' : 'Create a New Paste'}
      </h1>

      <input
        className="bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 outline-none rounded-lg px-4 py-3 w-full transition duration-200 placeholder-gray-400"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 outline-none rounded-lg px-4 py-3 w-full mt-5 resize-y transition duration-200 placeholder-gray-400"
        placeholder="Enter your paste content here"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        rows="10"
      />

      <button
        onClick={handleCreateOrUpdatePaste}
        className="mt-8 w-full bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-200"
      >
        {pasteId ? 'Update Paste' : 'Create Paste'}
      </button>
    </div>
  </div>
);

};

export default Home;