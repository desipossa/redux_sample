import React from 'react'
import { useSelector } from 'react-redux';

const App = () => {
  const test = useSelector(state => state.test);
  return (
    <div>
      {test}
    </div>
  )
}

export default App
