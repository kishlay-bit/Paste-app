import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
    const { id } = useParams();
    const pastes = useSelector((state) => state.paste.pastes);
    const paste = pastes.find(p => p._id === id);

    return (
        <div className="flex items-center justify-center min-h-screen min-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-2 py-6 overflow-auto">
            <div className="w-full max-w-2xl bg-gray-800 shadow-2xl rounded-2xl p-8 border border-gray-700">
                <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center tracking-wide">View Paste</h1>
                <input
                    className="bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 outline-none rounded-lg px-4 py-3 w-full transition duration-200 placeholder-gray-400 mb-5"
                    type="text"
                    placeholder='Enter title here'
                    value={paste ? paste.title : ''}
                    disabled
                />
                <textarea
                    className="bg-gray-900 text-gray-100 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 outline-none rounded-lg px-4 py-3 w-full resize-y transition duration-200 placeholder-gray-400"
                    placeholder='Enter your paste content here'
                    value={paste ? paste.content : ''}
                    disabled
                    rows="10"
                ></textarea>
                <p className="text-xs text-gray-400 mt-6 text-right">{paste ? `Created at: ${new Date(paste.createdAt).toLocaleString()}` : ''}</p>
            </div>
        </div>
    );
};

export default ViewPaste;
