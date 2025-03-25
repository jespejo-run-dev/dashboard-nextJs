import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  }
});

export const {} = counterSlice.actions

export default counterSlice.reducer