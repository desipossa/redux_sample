### 1. 리덕스툴킷 설치
npm install @reduxjs/toolkit


### 2. store(state 모아둘 곳) 만들기

```
import { configureStore } from "@reduxjs/toolkit";

export default store = configureStore({
    reducer: {},
})
```


### 3. Provider 로 앱 싸주기

```
import { Provider } from 'react-redux';
import store from './data/store';

<Provider store={store}>
    <App />
</Provider>
```

### 4. createSlice로 state 추가하기

```
const test = createSlice({
    name: 'test',
    initialState: '나는 테스트 텍스트임...'
})
```
