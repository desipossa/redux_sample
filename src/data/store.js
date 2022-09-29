import { configureStore, createSlice } from "@reduxjs/toolkit";


const test = createSlice({
    name: 'test',
    initialState: '나는 테스트 텍스트임...'
})
const store = configureStore({
    reducer: {
        test: test.reducer
    }
});

export default store;