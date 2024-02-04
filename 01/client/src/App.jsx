import { useState } from 'react'
import './App.css'
import { apiCallFetch } from '../utils/apiCall'

function App() {
  const [resp, setResp] = useState(undefined);

  const handleClick = async () => {
    console.log('clicked');
    const { data } = await apiCallFetch(undefined, undefined, undefined, 'query ExampleQuery { greeting }')
    setResp(data)
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me
        {resp && <p>{resp?.greeting}</p>}
      </button>
    </>
  )
}

export default App
