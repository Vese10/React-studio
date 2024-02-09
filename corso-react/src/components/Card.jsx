import './Card.css'

function Card({title, imgUrl, isVisited, children}){

  return(
    <div className="rounded-md">
      <img className='immagine' src={imgUrl} alt=""></img>
      <div className="flex flex-col">
        <h2 className='title'>{title}</h2>
        <p className='para'>{children}</p>
      </div>
      <span>{isVisited ? "✔ visitata" : "✘ non visitata"}</span>
    </div>
  )
}

export default Card