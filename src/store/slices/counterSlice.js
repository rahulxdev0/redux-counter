import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value += 1
        },
        clear: (state, action) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, clear} = CounterSlice.actions
export default CounterSlice;