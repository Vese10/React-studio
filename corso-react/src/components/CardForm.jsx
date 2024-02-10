function CardForm({ addCity }){
  const handleClick = ()=> {
    const city = {
      id: 4,
      name: "Sydney",
      description: "Lorem ipsum",
      imgUrl:"https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1577511885275-8F83YNVPHVSNSS8UNJ4D/image-asset.jpeg?format=1500w",
      isVisited: false,
    };
    addCity(city);
  };

  return(
    <div className="card-form">
      <input type="text"></input>
      <input type="text"></input>
      <input type="text"></input>
      <button onClick={handleClick}>Aggiungi Card</button>
    </div>
  )
}

export default CardForm;