import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';

function App() {

  const [count, setCount] = useState(0);
  const [cities, setCities] = useState([
    {
      id: 0,
      name: "Tokyo",
      description: "Lorem Ipsum",
      imgUrl: "https://media-assets.vanityfair.it/photos/644c24f7cd60f0ca3be60db8/16:9/w_1920%2Cc_limit/AdobeStock_251121174.jpeg",
      isVisited: true,
    },
    {
      id: 1,
      name: "New York",
      description: "Lorem Ipsum",
      imgUrl: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Rome",
      description: "Lorem Ipsum",
      imgUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "Paris",
      description: "Lorem Ipsum",
      imgUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
  ]);

  const addCity = (city) => {
    setCities([...cities, city])
  }

  return (
    <>
      <CardForm addCity={addCity}></CardForm>
      <div className='cards'>
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.name}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}>
            {city.description}
            </Card>
        ))}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
