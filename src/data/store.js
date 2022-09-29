import { configureStore, createSlice } from "@reduxjs/toolkit";


const test = createSlice({
    name: 'test',
    initialState: '나는 테스트 텍스트임...'
})

export const store = configureStore({
    reducer: {},
})