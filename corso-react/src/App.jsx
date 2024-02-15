import { useState, useEffect, useReducer } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';
import Example from './components/Example';
import { ProvaContext } from './components/stores/ProvaContext';

function formReducer(state, action){
  switch(action.type){
    case "CHANGE_FIELD":
      return {...state, [action.field]: action.value}
      case "RESET_FORM":
        return { name: "", email: ""};
      default:
        return state;
  }
}

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [formState, dispatchFormState] = useReducer(formReducer, {name: '', email: ''})

  const handleFieldChange = (field, value) => {
    dispatchFormState({type: "CHANGE_FIELD", field, value})
  }
  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({type: "RESET_FORM"})
  }
  const sendForm = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      setData(data); 
      console.log(data);
    })
  }, [count]);

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
    <ProvaContext.Provider value={{ count, setCount }}>
      <Example></Example>
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

      <div className='cards'>
        {data.map((item) => (
          <div key={item.id}>
            <p>User ID: {item.userId}</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <form>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input 
            type='text'
            id='name'
            name='name'
            value={formState.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input 
            type='email'
            id='email'
            name='email'
            value={formState.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
        </div>
        <button onClick={resetForm}>Resetta il Form</button>
        <button onClick={sendForm}>Invia</button>
      </form>
    </ProvaContext.Provider>
  )
}

export default App
