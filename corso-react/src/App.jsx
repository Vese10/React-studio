import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cards'>
        <Card 
          title='Tokyo' 
          imgUrl='https://media-assets.vanityfair.it/photos/644c24f7cd60f0ca3be60db8/16:9/w_1920%2Cc_limit/AdobeStock_251121174.jpeg'>Capitale Giappone</Card>
        <Card
          title='New York'
          imgUrl='https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>Città USA</Card>
        <Card 
          title='Rome'
          imgUrl='https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>Capitale Italia</Card>
        <Card
          title='Paris'
          imgUrl='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>Capitale Francia</Card>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
