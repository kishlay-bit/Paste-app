import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
  pastes:localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
        const newPaste = action.payload;

        // Check if the paste already exists
        const existingPaste = state.pastes.find(paste => paste._id === newPaste._id);
        if (existingPaste) {    
            toast.error('Paste with this ID already exists!');
            return;
        }        

        state.pastes.push(newPaste);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste added successfully!');
      
    },
    updateToPaste: (state,action) => {
        const updatedPaste = action.payload;
        const index = state.pastes.findIndex(p => p._id === updatedPaste._id);
        if (index !== -1) {
            state.pastes[index] = updatedPaste;
            localStorage.setItem('pastes', JSON.stringify(state.pastes));
            toast.success('Paste updated successfully!');
        } else {
            toast.error('Paste not found for update!');
        }
      
    },
    resetAllPaste: (state, action) => {
        state.pastes = [];
        localStorage.removeItem('pastes');
        toast.success('All pastes reset successfully!');
        
      
    },
    removeFromPaste: (state, action) => {
        const pasteId = action.payload;
        state.pastes = state.pastes.filter(paste => paste._id !== pasteId);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste removed successfully!');
        
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste } = PasteSlice.actions

export default PasteSlice.reducer