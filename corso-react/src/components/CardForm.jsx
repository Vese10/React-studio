import { useState, useContext } from 'react'
import { ProvaContext } from './stores/ProvaContext';

function CardForm({ addCity }){
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgUrl: "",
    isVisited: false,
  })

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited,
    };
    setFormData({
      name: "",
      description: "",
      imgUrl: "",
      isVisited: false,
    });
    addCity(city);
  };

  const { count } = useContext(ProvaContext)

  return(
    <form onSubmit={handleSubmit} className="card-form">
      <div>
        <label>Nome</label>
        <input 
          type="text" 
          name="name" 
          value={formData.value} 
          onChange={handleInputChange}></input>
      </div>
      <div>
        <label>Descrizione {count}</label>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleInputChange}></textarea>
      </div>
      <div>
        <label>Immagine</label>
        <input 
          type="text" 
          name="imgUrl" 
          value={formData.imgUrl} 
          onChange={handleInputChange}></input>
      </div>
      <div>
        <label>Visitata?</label>
        <input 
          type="checkbox" 
          name="isVisited" 
          checked={formData.isVisited} 
          onChange={handleInputChange}></input>
      </div>
      <button type="submit">Aggiungi Card</button>
    </form>
  )
}

export default CardForm;