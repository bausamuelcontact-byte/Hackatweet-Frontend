import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const trendsSlice = createSlice({
	name: 'trends',
	initialState,
	reducers: {
		addTrend: (state, action) => {
		    // Hashtag = action.payload
			state.value.push(action.payload)
		},
		setAllTrends: (state, action) => {
          state.value = action.payload; 
        },
		removeTrend: (state, action) => {
			
	    },
	}	
});

export const { addTrend, removeTrend, setAllTrends } = trendsSlice.actions;
export default trendsSlice.reducer;
